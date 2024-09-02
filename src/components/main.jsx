import { useContext } from "react";
import DataContext from "../context/context";
import { useNavigate } from "react-router-dom";

import usePost from "./usePost";
export const Main = () => {
const {newPost,handleDelete,posts} = useContext(DataContext);

const data3 = JSON.parse(localStorage.getItem('password2'))
const callPost =useNavigate();

const {} = usePost('');
const alertUser = (user) => {
  const data4 = JSON.parse(localStorage.getItem(user))

  alert(data4);
}


    return(
        <>
          <div className="main">
            <div className="empty"></div>
              
               {data3?.map((pass2,index) =>
                <div className="container-post" key={index}>
                <div className="post1"><h3 className='chat' onClick={(index)=>alertUser(pass2.user)}>
                {pass2.user?.toUpperCase().slice(0,1) }</h3 ><h3 onClick={()=>callPost('./post')}>{pass2.user}</h3> </div>
                <div className="post2">...</div>
                <div className="post3"> {newPost}{posts?.map((nurr,index)=><div key={index}>{nurr}</div>)} </div>
                <div className="post4">
                   <div className="post-comment1">likes</div>
                   <div className="post-comment2">comment</div>
                  <div className="post-comment3">share</div>
                <div className="post-delete">
               <div className ='post-comment3' onClick={()=>handleDelete(index)}>delete</div></div>
                </div>
                 
                   
               </div>)}
            
            
        </div>
        </>
    )
}