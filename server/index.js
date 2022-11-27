const express=require("express");
const app=express();
const mongoose = require("mongoose");
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)
const dotenv = require('dotenv')
const routeUrls = require('./routes/userRoutes')
const Usermodel=require('./models/users')
const cors=require('cors');

dotenv.config()


app.use(express.json());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use('/app', routeUrls)


mongoose.connect(process.env.DATABASE_ACCESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connection to MongoDB successfull..."))
    .catch((err) => console.log("Unable to connect to MongoDB...", err));

const mongoDBstore = new MongoDBStore({
    uri: process.env.DATABASE_ACCESS,
    collection: 'localSessions',
})


app.get("/getusers",(req,res)=>{
    Usermodel.find({},(err,result)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    })
});

app.post("/createuser",async (req,res)=>{
    const user=req.body
    const newuser=new Usermodel(user);
    await newuser.save();
    res.json(user);
})


app.listen(3001,()=>{
    console.log("server_runs_perfectely");
});

