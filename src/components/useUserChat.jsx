import React, { useCallback, useEffect, useState } from 'react'

const useUserChat = (user2,val) => {
  const  [user,setUser] = useState(user2,val);
  const  [userChat,setUserChat] = useState('');
  const  [userChat2,setUserChat2] = useState([]);
  const  [friendChat,setFriendChat] = useState('');
  const  [friendChat2,setFriendChat2] = useState([]);

const handleUserChat = () => {
    

   setUserChat2((userChat2)=>[...userChat2,userChat]);
  
  
   
   
  
}
  const handleFriendChat =() => {  
    

    setFriendChat2((friendChat2)=>[...friendChat2,friendChat]);

   
  ; 
  }


   user2 = (user2) => { 
    
    setUser(()=>
    <>
    <div>
        <h3>{user2}</h3>
        
    </div>
    <div>
         <input type="text"  onChange={(e)=>setUserChat(e.target.value)}/> 
                 <button onClick={handleUserChat}> userPost </button>

   </div>
    
     <div>
    <input type="text"  onChange={(e)=>setFriendChat(e.target.value)}/>
    <button onClick={handleFriendChat}> friendPost</button>
        
    </div>
   <div> {userChat2?.map((item,index)=> <div key={index}>{item}</div>)}

    <div>{friendChat2?.map((item2,index2)=> <div key={index2}>{item2}</div>)}</div>
       </div>
    
    </>)
  }
  
  
  
    return [user,user2]
}

export default useUserChat
