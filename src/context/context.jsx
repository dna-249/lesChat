import { createContext } from "react";
import { useState,useEffect } from "react";
import useControl from "../components/useControl";

  const DataContext = createContext({});
  export const DataProvider = ({children})=>{
  const {handelUser,} = useControl('');


    const getData2 = (nura) => {
      const data2 = JSON.parse(localStorage.getItem(nura));
        if(data2) {return data2} else {return [] };
     }

    const [change, setChange]= useState(false);
   
    const [user,setUser] = useState('');
    const [password,setPassword]=useState('');
    const [newPassword,setNewPassword]=useState(getData2('password'));
   
   
    const [user2,setUser2] = useState('');
    const [password2,setPassword2]=useState('');
    const [newPassword2,setNewPassword2]=useState(getData2("password2"));
   
    const [value, setValue] = useState();
    const handleValue = (value,index) => {
     setValue(value);
    }
    const handlePassword = () => {
      
                      setNewPassword(newPassword =>[...newPassword,{user,password}])
                      handelUser();
       
                     }
   
    const handlePassword2 = () => {
     let password = password2;
     let user = user2;
     
                     setNewPassword2(newPassword2 =>[ ...newPassword2,{user,password}])
                     handelUser();
                     
                   }
   
   
    useEffect(()=>{
    localStorage.setItem('password',JSON.stringify(newPassword)); 
    localStorage.setItem('password2',JSON.stringify(newPassword2))
   
    },[newPassword,newPassword2,password,password2])
    
    
    
     // to store data
     useEffect(()=>{
         localStorage.setItem('data',JSON.stringify(posts));
         
    },[]);
  


    // main section
    const getData = () => {
        const data = JSON.parse(localStorage.getItem('data'));
        if(data){ return data} else { return ['nura']}
      }
      
      
      const [post, setPost]=useState('');
      const [posts, setPosts]=useState(getData());
     
     const handlePost2 = (e) => {
      setPost(e.target.value);
     }
     
      function handlePost(){
        if(post){
          setPosts([...posts,post]);setPost('')
      }else{
        setPost('');
      }
      handelNewPost(post);
     }
     const [newPost,setNewPost] =useState('');
     const handelNewPost = (newPost) => {
       setNewPost(()=>
         <div>
          {newPost}
         </div>
       )
     }
      
      const handleDelete = (index) => {
            setPosts(posts.filter((_,i)=> i !== index));
      }
      const handleChange2 = (name) => {
        alert(`am a ${name}`)
       } 
       
       
    return(

        <DataContext.Provider value={{
            posts, setPosts, handleDelete, handlePost,handlePost2,
            user,user2, setUser,setUser2,password,
            password2,setPassword2,
            setNewPassword2,newPassword2,newPassword,
            setNewPassword,setPassword,handlePassword,
            handlePassword2,handleChange2,value,handleValue,newPost,
        }}>
            {children}
        </DataContext.Provider>
    )
  }
  export default DataContext;