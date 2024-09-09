import React, { useRef, useState } from 'react'
import { useContext } from "react";
import DataContext from "../context/context";
import usePost from './usePost';
import useUserChat from './useUserChat';

const Chat = () => {
   const {setShow,show} = useContext(DataContext)
   const data3 = JSON.parse(localStorage.getItem('user2'))

   const { value,handleChat2 } = usePost('');
   const [user3,handleUserChat3]=useUserChat()
      
   
    
    
  return (
    <>
    <div className='name2'>
      <div className='name'><h3 className='name2'>Friends</h3>
       <div>{value} {user3}</div>
        {data3?.map((pass2,ind2) =>
         <div className='chat2' key={ind2}> 
         <h3 className='chat'  >
          {pass2.user?.toUpperCase().slice(0,1) } </h3> 
          <h3  onClick={()=>handleUserChat3(pass2.user)}> {pass2.user}</h3><button 
          onClick={(ind2)=>handleChat2(pass2.user,ind2)}>post</button>
          </div>)}
    </div>
    </div>
    <div>
  
    </div>
    
  </>)
}

export default Chat;
