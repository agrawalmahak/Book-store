import React, { useState } from 'react'
import BackButton from '../components/BackButton'
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const DeleteBook = () => {
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();
  const {id}=useParams();
  const{enqueueSnackbar} = useSnackbar();
  const handleDeleteBook=()=>{
    setLoading(true);
    axios.delete(`http://localhost:5555/books/${id}`)
    .then(()=>{
      setLoading(false);
      enqueueSnackbar('Book Deleted Successfully',{variant:'success'});
      navigate('/');
    }).catch((error)=>{
setLoading(false);
// alert('An error occured. Please check credentials')
enqueueSnackbar('Error',{variant:'error'})
console.log(error);
    })
  }
  return (
    <div className='p-4'>
     <BackButton />
      <h1 className='text-3xl my-4'>Create Book</h1>
      {loading ? <Spinner /> : null}
      <div className='flex items-center flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
  <h3 className='text-2xl'>Are you sure you want to delete</h3>
  <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleDeleteBook}>Yes, Delete it</button>
    </div>
    </div>
  )
}

export default DeleteBook
