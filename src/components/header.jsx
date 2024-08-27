import { Link } from "react-router-dom";
export const Header = () => {
    
    return(
        <>
        <div className="title">lesChat!</div>
        
        <div className="link">
            <Link to='/'> Search...</Link>
            <Link to='/post'>Posts</Link>
            <Link to='/friend'>Friends</Link>
            <Link to='/chat'>invites</Link>
        </div>
             
    
   </> )
}