import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';


const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user
    ] = useCreateUserWithEmailAndPassword(auth)
    const navigate = useNavigate();
    const handleRegister = (event) => {
        event.preventDefault();

        // const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password)
        createUserWithEmailAndPassword(email, password)
        console.log(user);
        // console.log(email, password)
    }
    const navigator = () => {
        navigate('/login')
    }
    if (user) {
        navigate("/home")
    }

    return (
        <div className='register-form'>
            <div>
                <h2>Please Register</h2>
                <form onSubmit={handleRegister}>
                    <input type="text" name="name" placeholder='Your name' />
                    <input type="email" name='email' placeholder='Email Address' required />
                    <input type="password" name="password" placeholder='password' required id="" />
                    <input type="submit" value="Register" className='submit' />
                </form>
                <p>Already have an account? <Link to="/login" onClick={navigator} className='text-decoration-none pe-auto text-danger'>Go to Login</Link></p>
            </div>
        </div>
    );
};

export default Register;