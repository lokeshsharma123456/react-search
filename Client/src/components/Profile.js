import React from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './profile.css'
const BACKEND_URI = "http://localhost:3001/app/";

function Profile(props) {

    // const tableStyle = {
    //     width:'fit-content',
    //     margin: 'auto',
    //     border: '1px solid black'
    // };

    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/login');
    }

    const email = sessionStorage.getItem("curr_email");

    // // If email is null it means the session variable is not set and hence the user
    // // has not logged in yet
    if(email == null) {
        return (<p>
            Please Login First.
            <button onClick={navigateToLogin} className='btn btn-primary'>
                Go To Login
            </button>
        </p>)
    }

    // // control comes here if email is not null.
    return (<div>
        <nav className="navbar bg-white container">
            <h5><Link to="/profile">Profile</Link></h5>
            <h3>Welcome, {email}</h3>
            <h5><Link to="/search">Search</Link></h5>
            
        </nav>
        <div className='text-center'>
            <p id='boys'>Based on your past searches</p>
            {/* <div id='past'> */}
                <div id='p1'>paper 1</div>
                <div id='p1'>paper 2</div>
                <div id='p1'>paper 3</div>
                <div id='p1'>paper 4</div>
                <div id='p1'>paper 5</div>
                <div id='p1'>paper 6</div>
                <div id='p1'>paper 7</div>
                <div id='p1'>paper 8</div>
                <div id='p1'>paper 9</div>
                <div id='p1'>paper 10</div>
                <div id='p1'>paper 11</div>
                <div id='p1'>paper 12</div>
                <div id='p1'>paper 13</div>
                <div id='p1'>paper 14</div>
                <div id='p1'>paper 15</div>
            {/* </div> */}
            <button className='btn btn-primary m-4' onClick={async (e) => {
                sessionStorage.removeItem("curr_email");
                navigateToLogin();
            }}>Logout</button>
        </div>
    </div>);
       
}

export default Profile;