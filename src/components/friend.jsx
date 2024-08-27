import React from 'react'
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import DataContext from '../context/context';
import Chat from './chat';
const Friend = ( ) => {
const {user2, setUser,setUser2,password2,setPassword2,show,hide,
  newPassword2,newPassword,setPassword,handleChange,handlePassword,handlePassword2
} =useContext(DataContext);
 
 
  return(
    <>
    <div className='name2' >
    <h3 className='login'> lesChat! <br /><span className="login2">you & me</span> </h3>
    <div className="name" id={show}> <h3>LogIn</h3> <br />
      <div action="" autoComplete='password'> 
        <label className='username' htmlFor="username">Username:
          <input type="text" className="username" required  onChange={(e)=>setUser(e.target.value)}  />
        </label> <br />
        <label className='password' htmlFor="password">Password:
          <input type="password" className="password" required onChange={(e)=>setPassword(e.target.value)} />
        </label><br /><h3> <button className='button' onClick={handlePassword}>Sign-in</button></h3>
             <p className="sign" style={{marginTop:'30px'}}  onClick={handleChange}> OR <br />  SignUP</p>  
      </div>
    </div>
    <div className="name" id={hide}> <h3>Create</h3> <br />
      <div action="" autoComplete='password2'> 
        <label className='username' htmlFor="username">Username:
          <input type="text" className="username" onChange={(e)=>setUser2(e.target.value)} required/>
        </label> <br />
        <label className='password' htmlFor="password">Password:
          <input type="password" className="password" onChange={(e)=>setPassword2(e.target.value)} required />
        </label><br /> <button className='button'onClick={handlePassword2} > SignUp</button> 
      </div>
      <div style={{display:''}}>{newPassword?.map((pass,ind) =>
         <div key={ind}>
          {pass.password} {pass.user}</div>)}
    </div>
    <div style={{display:''}}>{newPassword2?.map((pass2,ind2) =>
         <div key={ind2} >
          
          {pass2.password2} {pass2.user2}  </div>)}
    </div>
    </div>
   </div>
  <div >
    
  </div>
 </> )
  }
export default Friend
