import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../common_signup.css"

const BACKEND_URI = "http://localhost:3001/app/";

// functional component
function SignUpForm(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");   
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    return (
    <div className="center-div">
        <h1 className='text-center'>Sign Up</h1>
        <form className='form-group'>
            <label className='m-2 form-label'>Name : </label>
            <br />
            <input className='m-2 form-control' type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
            <br />
            <label className='m-2 form-label'>Age : </label>
            <br />
            <input className='m-2 form-control' type="number" name="age" value={age} onChange={(e) => setAge(e.target.value)}/>
            <br />
            <label className='m-2 form-label'>Email Id : </label>
            <br/>
            <input className='m-2 form-control' type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <br/>
            <label className='m-2 form-label'>Password : </label>
            <br/>
            <input className='m-2 form-control' type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <br/>         
        </form>
        <button className='btn btn-primary position-relative start-50 translate-middle-x' onClick={async (e) =>  {
                // send fetch (POST) request to server
                const requestOptions = {
                    method : 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body : JSON.stringify({ email : email, password : password,age:age,name:name })
                };

                var res = await fetch(BACKEND_URI + "signup", requestOptions);
                alert((await res.json())["msg"]);
                setEmail("");
                setPassword("");
                setAge("");
                setName("");
            }}>Sign Up</button>
            <br/>
            <p className='m-4'>Already Registered ? <Link to='/login'> Login Here</Link></p> 
    </div>);
}

export default SignUpForm;