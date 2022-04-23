import React from 'react';
import { useForm } from "react-hook-form";
const AddService = () => {

    const { register, handleSubmit, } = useForm();
    const onSubmit = data => {
        const url = 'http://localhost:5000/service';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })

    }
    return (
        <div className='w-50 mx-auto'>
            <h1>Please add a service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="service name" />
                <textarea className='w-100' {...register("description")} placeholder="description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input type="text" {...register("img")} placeholder="Photo URL" />
                <input type="submit" value="Add service " />
            </form>
        </div>
    );
};

export default AddService;