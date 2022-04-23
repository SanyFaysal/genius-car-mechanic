import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='d-flex justify-content-center align-content-center'>
            <div>
                <Spinner animation="grow" variant="primary" />
            </div>
        </div>
    );
};

export default Loading;