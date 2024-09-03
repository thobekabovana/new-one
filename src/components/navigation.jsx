import { Outlet, Link } from "react-router-dom";
import image from '../assets/673162433a315be6b3ea8380fd280b3c.webp'

let styles = {
  nav: {
    backgroundColor: 'violet',
    padding: '10px',
    color: '#333'
  }}

export const Navig = () => {
  return (
    <>
      <nav>
        <ul>
       
            
       <div style={{ position: "absolute", top: "1%", left: "0.5%", right: "0.5", width: "99%"}}>
           
            <nav style={styles.nav}>
 
            <img src={image} alt="Logo" style={{ width: "3%", height:"3%"}}></img>

            <Link to="/log-in" style={{ fontSize: "20px", color: "white", marginLeft: "85%"}}>LogIn</Link>
        
            <Link to="/create" style={{fontSize: "20px",  color: "white",marginLeft: "3%" }}>SignUp</Link>
            </nav>
            </div>
          
        </ul>
      </nav>

      <Outlet />

    </>
  )
};