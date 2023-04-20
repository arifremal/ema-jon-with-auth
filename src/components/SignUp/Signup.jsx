import React, { useState } from 'react';
import "./Signup.css"
import { Link } from 'react-router-dom';

const Signup = () => {
    const [error,setError] = useState('')
    const handleSignUp = event =>{
        event.preventDefault()
        const form =event.target
        const email= form.email.value
        const confirm= form.confirm.value
        const password= form.password.value
        console.log(email,password,confirm);
        if(password !== confirm){
            setError('Your Password Didi not match')
            return

        }else if (password.length <6){
            setError('Password must be 6 character longer')
            return
        }
    }
    return (
        <div className='form-container'>
        <h1 className='form-title'>Sign Up</h1>
        <form onSubmit={handleSignUp } >

            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name='email' required />
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" name='password' required />
            </div>
            <div className="form-control">
                <label htmlFor="confirm">Confirm Password</label>
                <input type="password" name='confirm' required />
            </div>
            <input className='btn-submit' type="submit" value="Sign Up" />
            <p><small>Already have an account <Link to="/login"> Login</Link> </small></p>
        <p className='text-error'>{error}</p>
        </form>
    </div>
    );
};

export default Signup;