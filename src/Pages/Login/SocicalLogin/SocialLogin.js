import React from 'react';

import { useSignInWithGoogle, useSignInWithGithub } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    const navigate = useNavigate()
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger text-center'>{error?.message}</p>
    }
    if (user || user1) {
        navigate('/home')
    }

    return (
        <div>
            {errorElement}
            <div className='d-flex align-items-center mb-3'>
                <div className='border w-50' style={{ height: '2px' }}></div>
                <div className='px-2 text-dark text-opacity-50'>
                    OR
                </div>
                <div className='border w-50' style={{ height: '2px' }}></div>
            </div>
            <div className='d-flex justify-content-around'>
                <div>
                    <button onClick={() => signInWithGoogle()} className='btn border border-1 btn-dark'>
                        <img style={{ width: '25px' }} src="https://cdn-icons-png.flaticon.com/512/1000/1000777.png?w=740" alt="" />
                        <span className='ms-1'>  Google Sign in</span>
                    </button>
                </div>
                <div>
                    <button onClick={() => signInWithGithub()} className='btn border-25 border-1 btn-secondary '>
                        <img style={{ width: '25px' }} src="https://cdn-icons-png.flaticon.com/512/1051/1051326.png?w=740" alt="" />
                        <span className='ms-1'>Github Sign in</span>
                    </button>

                </div>
                <div>
                    <button className='btn border-25 border-1 btn-dark'>
                        <img style={{ width: '25px' }} className='me-1' src="https://cdn-icons-png.flaticon.com/512/733/733547.png?w=740" alt="" />
                        <span className='1'>Fb Signin</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;