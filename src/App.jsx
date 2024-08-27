
import './App.css'
import {Routes, Route } from 'react-router-dom';
import { Header } from './components/header';
import { Main } from './components/main';
import { Post } from './components/post';
import Friend from './components/friend';
import { useState,useEffect } from 'react';
import { DataProvider } from './context/context';
import Chat from './components/chat';
function App() {

 
  return (
    <>
    
    <div style={{display:'none'}}>
     <Friend/>
     </div>
      <div  >
     <DataProvider>
      <Header />
      <Routes >
       <Route path="/" element={<Main />}/>
        <Route path="/post" element={<Post/>}/>
       <Route path='/friend'  element={<Friend/>}/>
       <Route path="/chat" element={<Chat />}/>
      </Routes>
      </DataProvider>
     </div>
  </>
  )
}

export default App
