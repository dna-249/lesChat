import React, { useState } from 'react'
import { useContext } from "react";
import DataContext from "../context/context";
import usePost from './usePost';

const Chat = () => {
   const {setShow,show} = useContext(DataContext)
    const data3 = JSON.parse(localStorage.getItem('password2'))

       const { value, setValue,value2, setValue1,show1,setShow1,handleChat,handleChat2 } = usePost('');
    
   
    
    
  return (
    <div className='name2'>
      <div className='name'>{data3?.map((pass2,ind2) =>
         <div className='chat2' key={ind2}> 
         <h3 className='chat' >
          {pass2.user?.toUpperCase().slice(0,1) } </h3> 
          <h3> {pass2.user}</h3><button onClick={(ind2)=>handleChat2(pass2.user,ind2)}>post</button>
          </div>)}<div>{value}</div>
    </div>
    </div>
    
  )
}

export default Chat;
