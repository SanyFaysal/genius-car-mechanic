import React from 'react';
import useServices from '../../hooks/useServices';

const ManageServices = () => {
    const [services, setServices] = useServices();
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure to delete?')
        if (proceed) {
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remainServices = services.filter(service => service._id !== id);
                    setServices(remainServices)
                })
        }
    }
    return (
        <div>
            <h1>manage your services </h1>
            {
                services.map(service => <div className='w-50 mx-auto' key={service._id}>
                    <h5>{service.name}  <button onClick={() => handleDelete(service._id)}>delete</button></h5>
                </div>)
            }
        </div>
    );
};

export default ManageServices;