import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export function Create() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (!USER_REGEX.test(name)) {
      alert('Invalid username');
      return;
    }

    if (!PWD_REGEX.test(password)) {
      alert('Invalid password');
      return;
    }

    axios.post('http://localhost:5000/register', { name, email, password })
      .then(response => {
        navigate('/home', { replace: true });
      })
      .catch(error => {
        console.error(error);
        setError(error.message);
      });
  };

    return(
        <>
        <form onSubmit={handleSubmit}>
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

            

            <div style={ {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "0%"}}>

          <h1 style={{display: "flex",
              color: "violet",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "50px",
              marginTop: "20%"}}>Registor</h1>

              

            <input type="text" placeholder="Name"  value={name} onChange={(e) => setName(e.target.value)}
            style={{width: "40%", marginBottom: "15px",height: "5%", }}></input>

            <input type="text" placeholder="Email"  value={email} onChange={(e) => setEmail(e.target.value)}
            style={{width: "40%", marginBottom: "15px",height: "5%" }}></input>

            <input type="text" placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)}
            style={{width: "40%", marginBottom: "15px",height: "5%" }}></input>

            <input type="text" placeholder="Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
            style={{width: "40%", height: "5%", marginBottom: "15px"}}></input>


            <button type="submit" style={{backgroundColor: "violet",height: "40px", width: "60px"}}>Submit</button>

            </div>

        </div>
        </form>
        </>
    )
}