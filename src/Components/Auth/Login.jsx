import React from 'react'
import Signin from './Signin'
import useStore from '../../store.jsx/Store'
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const {usename,isloggedin,isLogin,handleChangeUsername}=useStore();
  const submit=()=>{
    isLogin()
    navigate('/');
  }
  const navigate=useNavigate();
  return (<>
      <div className='w-11/12 flex items-center relative left-4/12'>
      <div className='border-2 w-3/12 relative'>
        <h1 className='text-6xl font-sans'>Credentials</h1>
      <div className="inputs">
        <label htmlFor="username">UserName&nbsp;&nbsp;:</label>
        <input type="text" id='username' onChange={handleChangeUsername} className="border-2 ml-3 mb-3" /><br />
        <label htmlFor="Password">Password&nbsp;&nbsp;&nbsp;&nbsp;:</label>
        <input type="password" id='Password' className="border-2 ml-3" />
        </div>
        <button onClick={submit} className="border-2 mb-1.5 ml-2 rounded-full p-1">Submit</button>
    </div>
    </div>
    </>
  )
}
