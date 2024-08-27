import React, { useState } from 'react'
import { useContext } from "react";
import DataContext from "../context/context";

const Chat = () => {
    const [value, setValue] = useState();
   
    const data3 = JSON.parse(localStorage.getItem('password2'))
    const {setShow,show} = useContext(DataContext)
          const [value1, setValue1 ] = useState();
          const [show1,setShow1] = useState('showClass')
            
          const handleChat2 = (index) => {
         

            setValue(()=>
           <div className="post3">
            {value1} 
            <input type='text' className={show1} onChange={(e)=>setValue1(e.target.value)}/> </div>
            );
            handleChat();
          }
          

    const handleChat = (value,index) => {
      setShow1('hideClass')
     }
    
   
    
    
  return (
    <div className='name2'><div>{value}</div>
      <div className='name'>{data3?.map((pass2,ind2) =>
         <div className='chat2' key={ind2}> 
         <h3 className='chat' onClick={(index)=>handleChat2(index)}>
          {pass2.user.toUpperCase().slice(0,1) } </h3> 
          <h3> {pass2.user}</h3>
          
          </div>)}{value}
    </div>
    </div>
    
  )
}

export default Chat;
