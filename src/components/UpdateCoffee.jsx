/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const {_id,name,chef,Price,taste,Photo,details,category} = coffee
    console.log(coffee);
    const handelUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const Price = form.price.value;
        const taste = form.taste.value;
        const Photo = form.Photo.value;
        const details = form.details.value;
        const category = form.category.value;
        const updatedCoffee = {name,chef,Price,taste,Photo,details,category}
        console.log(updatedCoffee);

        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:'PUT',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'success!',
                    text: 'Coffee updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }
    return (
        <div className='bg-[#F4F3F0]'>
            <h1 className='text-5xl text-center font-semibold py-5' style={{ fontFamily: 'Rancho'}} >Update Existing Coffee Details</h1>
            <p className='md:px-36 text-start md:text-center px-2 text-gray-500'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

            <form onSubmit={handelUpdateCoffee} className="">
                <div className='md:flex gap-7 px-8 md:px-20'>
                    <div className="my-4 w-full">
                        <label htmlFor="name" className="block font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder='Enter coffee name'
                            className="mt-1 px-2 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            defaultValue={name}

                        />
                    </div>
                    <div className="my-4 w-full">
                        <label htmlFor="chef" className="block font-medium text-gray-700">Chef</label>
                        <input
                            type="text"
                            id="chef"
                            name="chef"
                            defaultValue={chef}
                            placeholder='Enter coffee chef'
                            className="mt-1 px-2 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"

                        />
                    </div>
                </div>
                <div className='md:flex gap-7 px-8 md:px-20'>
                    <div className="my-4 w-full">
                        <label htmlFor="supplier" className="block font-medium text-gray-700">Price</label>
                        <input
                            type="text"
                            id="price"
                            name="price"
                            defaultValue={Price}
                            placeholder='Enter coffee price'
                            className="mt-1 px-2 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"

                        />
                    </div>
                    <div className="my-4 w-full">
                        <label htmlFor="taste" className="block font-medium text-gray-700">Taste</label>
                        <input
                            type="text"
                            id="taste"
                            name="taste"
                            defaultValue={taste}
                            placeholder='Enter coffee taste'
                            className="mt-1 px-2 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"

                        />
                    </div>
                </div>
                <div className='md:flex gap-7 px-8 md:px-20'>

                    <div className="my-4 w-full">
                        <label htmlFor="category" className="block font-medium text-gray-700">Category</label>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            defaultValue={category}
                            placeholder='Enter coffee details'
                            className="mt-1 px-2 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"

                        />
                    </div>
                    <div className="my-4 w-full">
                        <label htmlFor="category" className="block font-medium text-gray-700">Details</label>
                        <input
                            type="text"
                            id="Details"
                            name="details"
                            defaultValue={details}
                            placeholder='Enter coffee details'
                            className="mt-1 px-2 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"

                        />
                    </div>
                </div>
                <div className="my-4 w-full px-8 md:px-20">
                    <label htmlFor="category" className="block font-medium text-start text-gray-700">Photo</label>
                    <input
                        type="text"
                        id="photo"
                        name="Photo"
                        placeholder='Enter photo URL'
                        defaultValue={Photo}
                        className="mt-1 px-2 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"

                    />
                </div>

                <div className='px-20'>
                    <button className='w-full mt-5 border-2 border-[#331A15] py-2 rounded-md mb-10 bg-[#D2B48C] '>Update Coffee Details</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateCoffee;