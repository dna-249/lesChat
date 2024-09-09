import React, { useCallback, useEffect, useMemo, useState } from 'react'

const useLikes = () => {
    const [count,setCount]= useState();
    const [count1,setCount1]= useState(1);
    const [count2,setCount2]= useState(1);
    const [isCount,setIsCount]=useState(false);
    let index = 0; 
    const handleCount = () =>{
    index++
    
       console.log(index) 
     setIsCount(!isCount),
         !isCount?  setCount1(count1 + 1) : setCount2(count2 - 1) ,
         console.log(index)   
         setCount((count)=> count1 + count2),console.log(isCount)
        return <div>{count}</div>
    }
  return {handleCount,count}
}

export default useLikes
