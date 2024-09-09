import { Link } from "react-router-dom";
export const Header = () => {
    
    return(
        <>
        <div className="title">lesChat!</div>
        
        <div className="link">
            <Link to='/'> lesChart!</Link>
            <Link to='/post'>Posts</Link>
            <Link to='/friend'>LogIn</Link>
            <Link to='/chat'>Friends</Link>
        </div>
             
    
   </> )
}