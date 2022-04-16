import React from 'react';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div className='border w-50' style={{ height: '2px' }}></div>
                <div className='px-2 text-dark text-opacity-50'>
                    OR
                </div>
                <div className='border w-50' style={{ height: '2px' }}></div>
            </div>
            <div className='d-flex justify-content-evenly'>
                <div>
                    <button className='btn border border-1 btn-dark'>
                        <img style={{ width: '30px' }} src="https://cdn-icons-png.flaticon.com/512/1000/1000777.png?w=740" alt="" />
                        <span className='ms-1'>  Google Sign in</span>
                    </button>
                </div>
                <div>
                    <button className='btn border-25 border-1 btn-secondary '>
                        <img style={{ width: '30px' }} src="https://cdn-icons-png.flaticon.com/512/1051/1051326.png?w=740" alt="" />
                        <span className='ms-1'>Github Sign in</span>
                    </button>

                </div>
                <div>
                    <button className='btn border-25 border-1 btn-dark'>
                        <img style={{ width: '30px' }} className='' src="https://cdn-icons-png.flaticon.com/512/733/733549.png?w=740" alt="" />
                        <span className='1'>   Facebook Sign in</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;