
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocicalLogin/SocialLogin';
import './Login.css'
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import PageTitle from '../../../Shared/PageTitle/PageTitle';
const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || '/';
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth)

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);


    const navigateLogin = () => {
        navigate('/register')
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('sent email')
    }

    if (user) {
        navigate(from, { replace: true });
    }


    let errorElement;

    if (error) {
        errorElement = <p className='text-danger text-center'>{error.message}</p>
    }


    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)

    }


    return (
        <div className='form-container mx-auto shadow py-3 px-4  rounded mt-2'>
            <PageTitle title='Login'></PageTitle>
            <h2 className='text-primary text-center mt-1'>Please Login</h2>

            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" required placeholder="Enter email" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" required placeholder="Password" />
                </Form.Group>
                <Button type='submit' className='w-100 mb-3'>Login</Button>
                <p>New to genius Car? <Link to="/register" className='text-bold text-decoration-none pe-auto text-success' onClick={navigateLogin}>Please Register</Link></p>
                <p>Forget Password? <Link to="/register" className='text-bold text-decoration-none pe-auto text-primary' onClick={resetPassword}>Reset Password</Link></p>
            </Form>
            {errorElement}
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;