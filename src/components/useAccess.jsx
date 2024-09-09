import React, { useState } from 'react'

const useAccess = (user,val) => {
    const [access, setAccess] = useState(user,val);
   const handle = (user) => {
     setAccess(user)
   };handle();

  return [access, setAccess]
  
}

export default useAccess
