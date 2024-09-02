import React, { useEffect, useState } from 'react'
import useSwitch from './useSwitch';

const useControl = () => {
const [onn, setOn] = useState(true);
const [off, setOff] =useState('hideClass');


 const handleOn = () => {
   setOn(prev => !prev)
 }
 const handleOff = () => {
   setOff('hideClass');
 }
 
 useEffect(()=>{
 },[])

  return {handleOff,handleOn,off,onn}
}

export default useControl;
