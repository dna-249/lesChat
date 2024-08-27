import { useContext, useState } from "react";
import DataContext from "../context/context";
export const Post = () => {
  
  const {handlePost2,posts,handlePost,handleDelete,newPost} = useContext(DataContext);

  
  
  return(
      <>
        <div className="main">
          <div className="empty"> </div>
         <div> <textarea type="text"  onChange={(e) =>handlePost2(e)} />
          <button className="" onClick={handlePost}>post</button></div>
             {posts?.map((post,index)=>
              <div className="container-post"  style={{display:''}}key={index}>
               <div className="post3" onClick={()=>handleDelete(index)} > <button className="" >delete </button>
                     {newPost}        {post}</div>
                </div>)}
           </div>
   </> )
}