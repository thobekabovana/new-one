import { Outlet, Link } from "react-router-dom";

export const Navig = () => {
  return (
    <>
      <nav>
        <ul>
       
            
       <div style={{backgroundColor: "black", float: "right", fontSize: "20px",marginRight: "40px", marginTop: "2%"}}>
      
            <Link to="/log-in" style={{marginRight: "20px", fontSize: "20px", color: "white"}}>LogIn</Link>
        
            <Link to="/create" style={{  fontSize: "20px",  color: "white"}}>SignUp</Link>
          
            </div>
          
        </ul>
      </nav>

      <Outlet />
    </>
  )
};