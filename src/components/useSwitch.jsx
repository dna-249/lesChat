import React, { useEffect, useMemo, useState } from 'react';
import DataContext from '../context/context';
import { useContext } from 'react';
import useControl from './useControl';

const useSwitch = () => {
    const {setHide,setShow,password,user} = useContext(DataContext);
    const {handleOn,handleOff, onn} = useControl('');
    const [show2,setShow2] = useState('hideClass')
    const [hide2,setHide2]  = useState('hideClass')
    const [show3, setShow3]= useState('hideClass');
    const [show4, setShow4]= useState('hideClass');
    const [hide4, setHide4]= useState('hideClass');

    const [isOn, setIsOn]   = useState(false);
    
    const handleSwitchOn = () => {
     
         setTimeout(() => {
          setShow2('showClass'), setHide2('hideClass')
     }, 3000);
     
    };
    
      
  
   const  handleSwitchOff = () => {
    
        setTimeout(() => {
         setShow3('showClass'),setHide4('hideClass')
    }, 5000);
     
   };
   
   const handleUser2 = () => {
    setTimeout(() => {
          setHide2('showClass'),setShow4('showClass'),setHide4('showClass')
 }, 8000);}


 const handleUser3 = () => {
  setTimeout(() => {
        setShow3('hideClass'),setShow4('showClass')
}, 1000);
   }
   
  
    
   
   
  useMemo(()=>{handleSwitchOn(),handleSwitchOff();},[]);

  useEffect(()=>{
     const  handleUser4= () => {
          handleOn();
         setTimeout(() => {
         setHide2('showClass'),setShow2('hideClass'),
         setShow3('hideClass'),setShow4('hideClass')
     }, 10000); 
      };handleUser4()

          const handleUser3 = () => {
               setTimeout(() => {
                     setShow3('hideClass'),setShow4('showClass')
             }, 10000);
                };handleUser3()
      
  },[user,password])
  return {handleSwitchOff,handleSwitchOn, 
     show2,hide2,show3,hide4,show4,
     handleUser2}
}

export default useSwitch;
