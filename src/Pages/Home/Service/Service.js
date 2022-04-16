import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const { name, img, description, price, id } = service;
    const navigate = useNavigate()
    const navigateToService = (id) => {
        navigate('/service/' + id)
    }
    return (
        <div className='service'>
            <img src={img} className="w-100" alt="" />
            <h3>{name}</h3>
            <p>{price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToService(id)} className='btn btn-primary'>Book : {name}</button>
        </div>
    );
};

export default Service;