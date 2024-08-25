import { useState } from "react";
import { useNavigate } from 'react-router-dom';
export function Create() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    navigate('/home', { replace: true });
  };

  
    

    return(
        <>
        <form onSubmit={handleSubmit}>
        <div style={{
             position: "absolute",
             top: 0,
             left: 0,
             width: "100%",
             height: "100vh",
            
            backgroundImage: "url('https://th.bing.com/th/id/R.ffedae46889c4082b212d03a7c31ac29?rik=UDbZi4j3H6vsYQ&pid=ImgRaw&r=0')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
            <h1 style={{display: "flex",
              color: "#660033",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "100px",
              marginTop: "5%"}}>Registor</h1>

            <div style={ {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "10%"}}>

            <input type="text" placeholder="Name"  value={name} onChange={(e) => setName(e.target.value)}
            style={{width: "40%", marginBottom: "15px",height: "5%" }}></input>

            <input type="text" placeholder="Email"  value={email} onChange={(e) => setEmail(e.target.value)}
            style={{width: "40%", marginBottom: "15px",height: "5%" }}></input>

            <input type="text" placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)}
            style={{width: "40%", marginBottom: "15px",height: "5%" }}></input>

            <input type="text" placeholder="Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
            style={{width: "40%", height: "5%", marginBottom: "15px"}}></input>


            <button type="submit" style={{backgroundColor: "purple"}}>Submit</button>

            </div>

        </div>
        </form>
        </>
    )
}