import React from 'react';
import { Alert } from 'react-bootstrap';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const location = useLocation();
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const sendVerification = async () => {
        await sendEmailVerification();
        alert('email verification sent ')
    }
    if (loading) {
        return <Loading></Loading>
    }
    console.log(user);
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    if (user.providerData[0].providerId && !user.emailVerified) {
        return <div>
            <h3 className='text-danger  text-center'>Verify your email</h3>
            <button className='btn btn-info mx-auto d-block' onClick={sendVerification}>Send Verification again</button>
        </div>
    }
    return children
};

export default RequireAuth;