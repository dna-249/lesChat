import React, { useState,useEffect, useCallback } from 'react';
import useControl from './useControl';

const useInput = (user,password,store) => {

    const {setHide1,setShow1} = useControl('');

    const getData = (store) => {
        const data = JSON.parse(localStorage.getItem(store));
          if(data) {return data} else {return [] };
       };
const [newValue,setNewValue] =useState(getData(store))

const handleNewValue = () => {
    
    if((user !=='') && (password !=='')){
setNewValue(newValue =>[...newValue,{user,password}]);
}
}
useEffect(()=>{ 
    localStorage.setItem(store,JSON.stringify(newValue)),getData(store)
    },[newValue])

  return [newValue,setNewValue,handleNewValue];
}

export default useInput
