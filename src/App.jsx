
import './App.css'
import {Routes, Route } from 'react-router-dom';
import { Header } from './components/header';
import { Main } from './components/main';
import { Post } from './components/post';
import Friend from './components/friend';
import { useState,useEffect } from 'react';
import { DataProvider } from './context/context';
import Chat from './components/chat';
import useControl from './components/useControl';
import useInput from './components/useInput';
function App() {
  const {hide1,show1} = useControl('');
  const [user,setUser] = useState('');
  const [password,setPassword]=useState('');
  const [newPassword,setNewPassword,handlePassword]=useInput(user,password,'user');
 
 
  const [user2,setUser2] = useState('');
  const [password2,setPassword2]=useState('');
  const [newPassword2,setNewPassword2,handlePassword2]=useInput(user2,password2,'user2');
 
  const {handleChange,show,hide,setHide1,show2,hide2} = useControl('');
 
return(
  <><div className={show1}>
  <div className='name2' >
  <h3  className={hide2}style={{fontSize: '50px', color: 'green', backgroundColor: 'aliceblue',
   textAlign: 'center', alignContent:'center', marginTop: '200px'}}> lesChat! <br />
  
  <span className="login2">you & me</span> </h3>

  <div className={show}
   style={{ textAlign: 'center',alignItems: 'center',backgroundColor: 'transparent',
               justifyContent:'center',color: 'green',backdropFilter: 'blur(3px)',width: '300px',
               height: '300px', border:"1px solid rgba(145, 188, 145, 0.776)",
                borderRadius: '10px',paddingTop: '50px',position: 'absolute',marginTop:' 100px'

  }}> <h3>LogIn</h3> <br />
    <div action="" autoComplete='password'> 
      <label className='username' htmlFor="username">Username:
        <input type="text" className="username" required  onChange={(e)=>setUser(e.target.value)}  />
      </label> <br />
      <label className='password' htmlFor="password">Password:
        <input type="password" className="password" required onChange={(e)=>setPassword(e.target.value)} />
      </label><br /><h3> <button className='button' onClick={handlePassword}>Sign-in</button></h3>
           <p className="sign" style={{marginTop:'30px'}}  onClick={handleChange}> OR <br />  SignUP</p>  
    </div>
  </div>
  <div 
   style={{ textAlign: 'center',alignItems: 'center',backgroundColor: 'transparent',
               justifyContent:'center',color: 'green',backdropFilter: 'blur(3px)',width: '300px',
               height: '300px', border:"1px solid rgba(145, 188, 145, 0.776)",
                borderRadius: '10px',paddingTop: '50px',position: 'absolute',marginTop:' 100px'

  }}

   className={hide}> <h3>Create</h3> <br />
    <div action="" autoComplete='password2'> 
      <label className='username' htmlFor="username">Username:
        <input type="text" className="username" onChange={(e)=>setUser2(e.target.value)} required/>
      </label> <br />
      <label className='password' htmlFor="password">Password:
        <input type="password" className="password" onChange={(e)=>setPassword2(e.target.value)} required />
      </label><br /> <button  id='dna' className='button'onClick={handlePassword2} > SignUp</button> 
    </div>
    <div style={{display:'none'}}>{newPassword?.map((pass,ind) =>
       <div key={ind}>
        {pass.password} {pass.user}</div>)}
  </div>
  <div style={{display:'none'}}>{newPassword2?.map((pass2,ind2) =>
       <div key={ind2} >
        
        {pass2.password2} {pass2.user2}  </div>)}
  </div>
  </div>
 </div>
<div >
  
</div>

</div>




    
    
     <DataProvider>
     <div className={hide1}> <Header /></div>
      <Routes >
       <Route path="/" element={ <div className={hide1} ><Main /></div>}/>
       <Route path="/post" element={<div className={hide1} ><Post/></div>}/>
       <Route path='/friend'  element={<div className={hide1}><Friend/></div>}/>
       <Route path="/chat" element={<div className={hide1}><Chat /></div>}/>
      </Routes>
      </DataProvider>
     
  </>
  )
}

export default App
