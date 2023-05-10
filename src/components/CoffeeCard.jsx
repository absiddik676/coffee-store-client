/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { AiFillEye } from "react-icons/ai";
import { HiPencil, HiTrash } from "react-icons/hi";
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee }) => {
    console.log(coffee);
    const { name, chef, Price, taste, Photo, details, category, _id } = coffee;
    const handelaDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div>
            <div className="card flex items-center card-side bg-[#f5f4f1d8] shadow-sm">
                <figure><img src={coffee.Photo} alt="Movie" /></figure>
                <div className="card-body">
                    <div className='text-start'>
                        <h2 className='text-lg'><span className='font-bold'>Name :</span> {name}</h2>
                        <h2 className='text-lg'><span className='font-bold'>Chef :</span> {chef}</h2>
                        <h2 className='text-lg'><span className='font-bold'>Price :</span> {Price} Taka</h2>
                    </div>
                </div>
                <div className='mr-5'>
                    <div className='p-1 rounded-sm bg-[#D2B48C]'>
                        <AiFillEye className='text-2xl text-white' />
                    </div>
                    <div className='p-1 my-4 rounded-sm bg-[#3C393B]'>
                        <HiPencil className='text-2xl text-white' />
                    </div>
                    <div className='p-1 rounded-sm bg-[#EA4744]'>
                        <button onClick={() => handelaDelete(_id)}><HiTrash className='text-2xl text-white' /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;
