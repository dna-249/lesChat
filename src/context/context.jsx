import { createContext } from "react";
import { useState,useEffect } from "react";

  const DataContext = createContext({});
  export const DataProvider = ({children})=>{



    const getData2 = (nura) => {
      const data2 = JSON.parse(localStorage.getItem(nura));
        if(data2) {return data2} else {return [] };
     }

    const [show, setShow]= useState('show');
    const [hide, setHide]= useState('hide');
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
   
    const handleChange = () => {
      if(change){
       setShow('show'),setHide('hide')
      }else{
       setShow('hide'),setHide('show')
      }
      handelUser();
    }
    
    const handelUser = () => {
       
    if((localStorage.getItem('password2')).includes(password) && 
    (localStorage.getItem('password2')).includes(user)) { alert('you are welcome!')
     setShow('hide'),setHide('hide')
   } else{ alert(' you have not opened account yet!'),
     setHide('show'),setShow('hide');}
    
    
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
          setPosts([...posts,post]);
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
       
       // to store data
       useEffect(()=>{
           localStorage.setItem('data',JSON.stringify(posts));
      },[]);
    return(

        <DataContext.Provider value={{
            posts, setPosts, handleDelete, handlePost,handlePost2,
            user,user2, setUser,setUser2,password,
            password2,setPassword2,show,hide,
            setNewPassword2,newPassword2,newPassword,
            setNewPassword,setPassword,handleChange,handlePassword,
            handlePassword2,handleChange2,value,handleValue,newPost,
        }}>
            {children}
        </DataContext.Provider>
    )
  }
  export default DataContext;