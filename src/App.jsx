
import './App.css'
import {Routes, Route } from 'react-router-dom';
import { Header } from './components/header';
import { Main } from './components/main';
import { Post } from './components/post';
import Friend from './components/friend';
import { useState,useEffect } from 'react';
import { DataProvider } from './context/context';
import Chat from './components/chat';
import DataContext from './context/context';
import { useContext } from 'react';
import usePost from './components/usePost';
import useSwitch from './components/useSwitch';
import useControl from './components/useControl';
function App() {

const {setShow,show3,setHide} = useContext(DataContext);
const {handleSwitchOff,handleSwitchOn,show2,hide2} = useSwitch('')
 const {onn,off,} = useControl('');
   
     
     
  
  return (
    <>
    
    

     <div className={show2}><Friend/></div>
      <div className={hide2} >
     <DataProvider>
      <div ><Header /></div> 
      <Routes >
       <Route path="/" element={<Main />}/>
        <Route path="/post" element={<Post/>}/>
       <Route path="/chat" element={<Chat />}/>
      </Routes>
      </DataProvider>
     </div>
  </>
  )
}

export default App
