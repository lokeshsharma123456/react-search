import "../common_login.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BACKEND_URI = "http://localhost:3001/app/";

// functional component
function LoginForm(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const navigateToProfile = () => {
        navigate('/profile');
    }

    return (
    <div className="center-div">
        <h1 className='text-center'>Login</h1>
        <form className='form-group'>
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
                    credentials : 'include',
                    method : 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body : JSON.stringify({ email : email, password : password })
                };

                var res = await fetch(BACKEND_URI + "login", requestOptions);
                alert((await res.json())["msg"]);
                setEmail("");
                setPassword("");
                if(res.status == 200) {
                    sessionStorage.setItem("curr_email", email);
                    navigateToProfile();
                }
            }}>Login</button>
            <br/>
            <p className='m-4'>Do not have an account ? <Link to='/signup'> Sign Up Here</Link> </p>
    </div>);
    
}

export default LoginForm;



// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'


// const Login = (props) => {
//     const [credentials, setCredentials] = useState({ email: "", password: "" })
//     // let history = useHistory();

//     let history = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const response = await fetch("http://localhost:3001/app/login", {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ email: credentials.email, password: credentials.password })
//         });
//         const json = await response.json()
//         console.log(json);
//         if (json.success) {
//             // Save the auth token and redirect
//             localStorage.setItem('token', json.authtoken);
//             history.push("/");

//         }
//         else {
//             alert("Invalid credentials");
//         }
//     }

//     const onChange = (e) => {
//         setCredentials({ ...credentials, [e.target.name]: e.target.value })
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                     <label htmlFor="email" className="form-label">Email address</label>
//                     <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
//                     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="password" className="form-label">Password</label>
//                     <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
//                 </div>

//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//         </div>
//     )
// }

// export default Login