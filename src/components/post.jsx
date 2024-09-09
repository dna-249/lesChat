import { useContext, useState } from "react";
import DataContext from "../context/context";
export const Post = () => {
  
  const {handlePost2,posts,handlePost,handleDelete,newPost,post} = useContext(DataContext);

  
  
  return(
      <>
        <div className="main">
          <div className="empty"> </div>
         <div> <textarea  style={{outline:'none',
                                 
                                }}  className='post3' type="text"  placeholder='write your post...' cols={100} rows={5} onChange={(e) =>handlePost2(e)} />
          <button     className="button post-delete" onClick={handlePost}>post</button></div>
          <div style ={{ backgroundColor:'lightgreen',
                        color:'whitesmoke',
                        padding:'5px',
                        marginTop:'10px',
                        border:'2px solid azure'
          }}className="name2"> Previous Post</div>
             {posts?.map((post,index)=>


              <div style={{height:'fit-content',
                backgroundColor:'aliceblue'
               }}  className="post3"  key={index}>


               <div  style={{height:'fit-content',
                            padding:'2px',
                            backgroundColor:'aliceblue'
               }}className="post3" onClick={()=>handleDelete(index)} > {post} 
               <button className="" >delete </button>
                            </div>
                </div>)}
           </div>
   </> )
}