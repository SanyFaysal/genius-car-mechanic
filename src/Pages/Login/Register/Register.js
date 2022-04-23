import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocicalLogin/SocialLogin';
import PageTitle from '../../../Shared/PageTitle/PageTitle';

const Register = () => {
    const [agree, setAgree] = useState(false)
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })

    const [updateProfile] = useUpdateProfile(auth);

    const handleRegister = async (event) => {
        event.preventDefault();
        const displayName = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile(displayName);
        navigate('/home')
    }
    const navigator = () => {
        navigate('/login')
    }
    if (user) {
        navigate("/home")
    }

    return (
        <div className='register-form shadow mt-1'>
            <PageTitle title='Register'></PageTitle>
            <div>
                <h2>Please Register</h2>
                <form onSubmit={handleRegister}>
                    <input type="text" name="name" placeholder='Your name' />
                    <input type="email" name='email' placeholder='Email Address' required />
                    <input type="password" name="password" placeholder='password' required id="" />
                    <input onClick={() => setAgree(!agree)} type="checkbox" className='me-1' name="terms" id="terms" />
                    <label className={agree ? 'text-primary' : 'text-danger'} htmlFor="terms">Accept terms and condition </label>
                    <input disabled={!agree} type="submit" value="Register" className='submit mt-2' />
                </form>
                <p>Already have an account? <Link to="/login" onClick={navigator} className='text-decoration-none pe-auto text-danger'>Go to Login</Link></p>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;