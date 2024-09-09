import React, { useCallback, useEffect, useMemo, useState } from 'react'

const useUseEffect = (nur,nur2,initialVal) => {
    const [change,setChange,]= useState(initialVal);
    
    useEffect(useMemo(()=>{
      let isCancelled = false;
      
     if (!isCancelled){
    const handle = () => {
        
        setTimeout(() => {
          setChange(nur)
          }, nur2);
          console.log(nur)

    
        
    };handle(); (()=>{console.log('is so nice')})()}
    
    return ()=>{
        isCancelled =true;
        console.log('cleanUp');
    }
    
   },[nur]));

   
  return [change,setChange]
}

export default useUseEffect
