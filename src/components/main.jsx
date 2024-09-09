import { useContext, useEffect, useState ,useRef} from "react";
import DataContext from "../context/context";
import { useNavigate } from "react-router-dom";

import usePost from "./usePost";
import useLikes from "./useLikes";
import useAccess from "./useAccess";
export const Main = () => {

  const [show1,setShow1] = useState('showClass');
  const [isShow1,setIsShow1] = useState(false);

  const {handleCount,count}= useLikes('');
const {newPost,handleDelete,posts} = useContext(DataContext);

const data3 = JSON.parse(localStorage.getItem('user2'))
const callPost =useNavigate();
const [userPost,setUserPost] = useState('');
const {value,value2,handleChat2} = usePost('');

const handle = (index,user) => {
  console.log(user)
    handleChat2(user)
  setIsShow1((prev)=> !prev);
   console.log(user)
};

return(<>

    
          <div className="main">
            <div  className="empty"></div>
              
               {data3?.map((pass2,index) =>
                <div className="container-post" key={index}>
                <div className="post1"><h3 className='chat' onClick={(index)=>handleChat2(index,pass2.user)} >
                {pass2.user?.toUpperCase().slice(0,1) }</h3 ><h3 onClick={()=>callPost('./post')} >{pass2.user}</h3> </div>
                <div className="post2">...</div>
                <div className="post3"> <img width={100} src="./dnapic.jpg"  alt="" /> {userPost} {newPost}{posts?.map((nur,index)=><div id="nuu" key={index}>{nur}</div>)} </div>
                <div className="post4">
                   <div className="post-comment1"   onClick={(index)=>handleCount(index)}>{count}likes</div>
                   <div className="post-comment2" onClick={(index)=>handle(index,pass2.user)} > comment
                    </div>
                  <div className="post-comment3" >share</div>
                <div className="post-delete">
               <div className ='post-comment3' onClick={()=>handleDelete(index)}>delete</div></div>
                <div  className={`${!isShow1? 'hide':'show'}`}>{value}</div></div>
                 
                   
               </div>)}
            
            
        </div>
        </>

  )
  }
