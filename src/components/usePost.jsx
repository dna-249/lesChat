import React, { useState } from 'react'

const usePost = (user ) => {
  const getData2 = (nura) => {
    const data2 = JSON.parse(localStorage.getItem(nura));
      if(data2) {return data2} else {return [] };
   }


    const [value, setValue] = useState();
    const [value2, setValue2] = useState(['']);
    const [value1, setValue1 ] = useState('');
    const [show1,setShow1] = useState('showClass')
            
    const handleChat2 = (user,ind2) => {
      user = localStorage.setItem(user,JSON.stringify(value2));
          handleChat(value1);
          setValue(ind2=> 
           <div className="post3" key={ind2}><h1>{user}</h1>{value2}
         <input type='text' className={show1} onChange={(ind2)=>setValue1(ind2.target.value)}/>
        </div>
            );
          }
          
    const handleChat = (value1) => {
      setValue2(value2 =>[...value2,value1]);setValue1('');
     }
    

  return{ value, setValue,value1, setValue1,show1,setShow1,handleChat,handleChat2 }
    }

export default usePost;
