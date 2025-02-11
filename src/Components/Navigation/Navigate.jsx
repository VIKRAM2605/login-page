import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Login from '../Auth/Login';
import Signin from '../Auth/Signin';
import useStore from '../../store.jsx/Store';
export default function Navigate() {
    const navigate=useNavigate();
    const {isloggedin,username}=useStore();
  return(
    <div className="h-screen bg-gray-500 w-30.5">
        <img src="vite.svg" className='w-17 relative left-6 pb-2'/>
        <div >
            <h3 className='text-center'>NAVIGATION</h3>
            <ol onClick={()=>navigate('/')} className='pt-1.5 pl-9 pb-3.5'>Home</ol>
            <ol onClick={()=>navigate('/Signin')} className='pl-9 pb-3.5'>Signin</ol>
            {!isloggedin && <ol onClick={()=>navigate('/Login')} className='border-b-2 pb-1.5 pl-9'>Login</ol>}
            {isloggedin && <ol className='border-b-2 pb-1.5 pl-9'>{username}</ol> }
            &nbsp;
        </div>
    </div>
  )
}
