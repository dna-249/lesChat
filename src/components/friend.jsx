import React from 'react'
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import DataContext from '../context/context';
import useSwitch from './useSwitch';
import useControl from './useControl';
import { useNavigate } from 'react-router-dom';
const Friend = ( ) => {
  
const {user2,setUser,setUser2,password2,setPassword2,setShow,show,hide,
  newPassword2,newPassword,setPassword,handlePassword,handlePassword2,handleChange
} =useContext(DataContext);

const {show3,show4,handleUser,handleUser3,hide4,handleUser4}= useSwitch('')
const {on,off,handleOn,handleOff}= useControl('');

  return(
    <>
    <div className='name2' >
      <div className={''}>
    <h3 className='login' > lesChat! <br /><span className="login2">you & me</span> </h3>
   </div>
   <div  className={show3} >
    <div className="name" > <h3>LogIn</h3> <br />
      <div action="username" autoComplete='password'> 
        <label className='username' htmlFor="username">Username:
          <input type="text" className="username" required  onChange={(e)=>setUser(e.target.value)}  />
        </label> <br />
        <label className='password' htmlFor="password">Password:
          <input type="password" className="password" required onChange={(e)=>setPassword(e.target.value)} />
        </label><br /><h3> <button className='button' onClick={handleUser}>Sign-in</button></h3>
             <p className="sign" style={{marginTop:'30px'}}  onClick={handleUser3} > OR <br />  SignUP</p>  
      </div>
    </div>
    </div>
    <div className={show4}>
    <div className='name' > <h3>Create</h3> <br />
      <div action="" autoComplete='password2'> 
        <label className='username' htmlFor="username">Username:
          <input type="text" className="username" onChange={(e)=>setUser2(e.target.value)} required/>
        </label> <br />
        <label className='password' htmlFor="password">Password:
          <input type="password" className="password" onChange={(e)=>setPassword2(e.target.value)} required />
        </label><br /> <button className='button'onClick={handleUser4} > SignUp</button> 
      </div></div>
      <div className="login" style={{position:'',
                             backgroundColor:'aliceblue',
                             
      }}><div  style={{display:''}}>
        congratulations!
        you have successfully created you account.
         you can now enjoy lesChat!
      </div>
      </div>
      <div style={{display:''}}>{newPassword?.map((pass,ind) =>
         <div key={ind}>
          {pass.password} {pass.user}</div>)}
    </div>
    <div style={{display:''}}>{newPassword2?.map((pass2,ind2) =>
         <div key={ind2} >
          
          {pass2.password2} {pass2.user2} {pass2.posts} </div>)}
    </div>
    </div>
    </div>
   
 
 </> )
  }
export default Friend
