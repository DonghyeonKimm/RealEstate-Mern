import React from 'react'
import { useSelector } from 'react-redux';
import { useRef, useState, useEffect } from 'react';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { app } from '../firebase';
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  signOutUserStart,
} from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
export default function Profile() {
  const fileRef = useRef(null);
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [showListingsError, setShowListingsError] = useState(false);
  const [userListings, setUserListings] = useState([]);
  const dispatch = useDispatch();

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile </h1>
      <form className='flex flex-col gap-4'>
        <img src= {currentUser.avatar} alt = "profile"
        className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2'
        />
        <input type = "text" placeholder='username' id = 'username'className='border p-3 rounded-lg' /> 
        <input type = "email" placeholder='email' id = 'email'className='border p-3 rounded-lg' /> 
        <input type = "text" placeholder='password' id = 'password'className='border p-3 rounded-lg' /> 
        <button className = 'bg-slate-700 text-white rounded-lg
        p-3 uppercase hover:opacity-95
        disabled:opacity-80'> update </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className='text-red-700 cursor-pointer'>
          Delete Acount
        </span>
        <span className='text-red-700 cursor-pointer'>
          Sign Out
        </span>
      </div>
    </div>
  )
}