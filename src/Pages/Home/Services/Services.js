import React, { useEffect, useState } from 'react';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css'


const Services = () => {
    const [services] = useServices();

    return (
        <div>
            <h1 id='services' className='services-title mt-5'>OUR SERVICES</h1>
            <div className='services-container container'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;