import React, { useCallback, useState } from 'react'

const usePost = ( ) => {
  const getData2 = (nura) => {
    const data2 = JSON.parse(localStorage.getItem(nura));
      if(data2) {return data2} else {return [] };
   }

    
    const [value, setValue] = useState();
    const [value2, setValue2] = useState(['']);
    const [value1, setValue1 ] = useState('');
    const [show1,setShow1] = useState('showClass')
    const [isShow1,setIsShow1] = useState(false)
            
    const handleChat2 = (user ) => {
       console.log(user)
        
          setValue(ind2=> <>
           <div className={show1} key={ind2}><div style={{minWidth:'250',
                                                          maxWidth:'1000px',
                                                          minHeight:'10px',
                                                          maxHeight:'30px'
           }}>{value2}</div>
           <textarea  className='username' placeholder='comment...' cols={30} rows={2} 
            onChange={(ind2)=>setValue1(ind2.target.value)}/>
        <button onClick={handleChat(value1)}> comment</button> </div>
            </>);
            const data4 = JSON.parse(localStorage.getItem(user))
            localStorage.setItem(user,JSON.stringify(value2)); 
          }
          
    const handleChat = (value1) => {
      setValue2(value2 =>[...value2,value1]);
     }
     
  return{value,handleChat2,value2}
    }

export default usePost;
