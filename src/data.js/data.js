import { useState, useEffect, createContext } from "react";

const DataContext = createContext({});

 export const DataProvider = ({children}) => {
    const getData = () => {
        const data = JSON.parse(localStorage.getItem('data'));
        if(data){ return data} else { return []}
      }
      
      
      const [post, setPost]=useState('');
      const [posts, setPosts]=useState(getData());
    
     
      function handlePost(){
          setPosts([...posts,post]),setPost('')
      }
      
    
      
      const handleDelete = (index) => {
            setPosts(posts.filter((_,i)=> i !== index));
      }
       // to store data
       useEffect(()=>{
           localStorage.setItem('data',JSON.stringify(posts));
      },[posts]);
    return (
        <DataContext.Provider value={{
          post, posts, setPosts,
        }}>
           {children}
        </DataContext.Provider>
    )
}
export default DataContext;