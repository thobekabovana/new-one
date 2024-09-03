import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function LogIn() {

    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home', { replace: true });
  };

    return(
        <>
        <form onSubmit={handleSubmit} >
        <div>
        <div style={{ backgroundImage: "url('https://th.bing.com/th/id/OIP.mmFR9I5glIUFMUZcRRILGgAAAA?w=429&h=600&rs=1&pid=ImgDetMain')",
                           backgroundRepeat: "no-repeat",
                           backgroundSize: "cover",
                           alignItems: "center",
                           borderRadius: "10px",
                           boxShadow: '0 4px 8px rgba(0, 0, 0, 5)',
                           textAlign: "center",
                           justifyItems: "center",
                           backgroundPosition: "center",
                           height: "80vh",
                           width: "40%",
                           marginTop: "8%",
                           marginLeft: "30%"
            }}>

        <nav>
        <ul>

       

    </ul>
        </nav>
        
        
        <div style={ {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "15%"}}>

<h1 style={{display: "flex",
              color: "violet",
              fontSize: "50px",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20%"}}>Log-In</h1>


            <input type="text" placeholder="username@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}
             style={{width: "40%", marginBottom: "15px",height: "5%" }}></input>

            <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
            style={{width: "40%", height: "5%", marginBottom: "15px"}}></input>

            
            <button type="submit" style={{backgroundColor: "violet",height: "40px", width: "60px",}}>LogIn</button>

        </div>
        </div>
        </div>
        </form>
        </>
    )
}