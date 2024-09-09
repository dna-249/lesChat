import React, { useCallback, useContext, useEffect, useState } from 'react';
import DataContext from '../context/context';
import { useNavigate } from 'react-router-dom';
import useUseEffect from './useUseEffect';



const useControl = () => {
  const {password,user,change,handlePassword2,setPassword} = useContext(DataContext);

  const [show, setShow]= useUseEffect('show',2000,'hide');
  const [hide, setHide]= useState('hide');
  
  const [show1,setShow1] = useUseEffect('hide',5000,'show');
  const [show2,setShow2] = useState('show',3000,'hide');
  const [show3,setShow3] = useState('hide');
  const [hide1,setHide1] = useUseEffect('show',5000,'hide');
  const [hide2,setHide2] = useUseEffect('show',1000,'hide');
  const [hide3,setHide3] = useState('hide');

const handleChange = () => {
  if(change){
   
    
  }else{
   setShow('hide'),setHide('show')
  }
  handelUser();
}

const handelUser = () => {
   
if((user)&&(password)&&(localStorage.getItem('password2')).includes(password) && 
(localStorage.getItem('password2')).includes(user)){ 
 setShow('hide'),setHide('hide'),setHide1('show')
} else { setHide('show'),setShow('hide');
  }
}

  return {handleChange,handelUser,setHide1,show,hide,hide1,show1,show2,hide2}
}

export default useControl;
