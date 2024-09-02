import { useContext, useState } from "react";
import DataContext from "../context/context";
export const Post = () => {
  
  const {handlePost2,posts,handlePost,handleDelete,newPost,post} = useContext(DataContext);

  
  
  return(
      <>
        <div className="main">
          <div className="empty"> </div>
         <div> <textarea value={post} className='username' type="text"  placeholder='write your post...' cols={100} rows={10} onChange={(e) =>handlePost2(e)} />
          <button className="button" onClick={handlePost}>post</button></div>
             {posts?.map((post,index)=>
              <div className="container-post"  style={{display:'none'}}key={index}>
               <div className="post3" onClick={()=>handleDelete(index)} > <button className="" >delete </button>
                     {newPost}        {post}</div>
                </div>)}
           </div>
   </> )
}