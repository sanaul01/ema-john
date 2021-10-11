import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Inter Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="password" />
                    <br />
                    <input type="submit" value="submit" />
                </form>
                <p>New to ema-john?<Link to ='/register'>Create Account</Link></p>
                <br />
                <div>-----------or-----------</div>
                <button className="btn-regular">Google Sign in</button>
            </div>
            
        </div>
    );
};

export default Login;