import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post('http://localhost:5000/validatePassword', { email, password });
      if (response.data.validation) {
        alert("Your password is correct. Thank you for your service");
        navigate('/home', { replace: true });
      } else {
        alert("Username or Password is incorrect. ");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          backgroundImage: "url('https://th.bing.com/th/id/OIP.mmFR9I5glIUFMUZcRRILGgAAAA?w=429&h=600&rs=1&pid=ImgDetMain')",
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
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "15%"
          }}
        >
          <h1
            style={{
              display: "flex",
              color: "violet",
              fontSize: "50px",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20%"
            }}
          >
            Log-In
          </h1>
          <input
            type="email"
            placeholder="username@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "40%",
              marginBottom: "15px",
              height: "5%"
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "40%",
              height: "5%",
              marginBottom: "15px"
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "violet",
              height: "40px",
              width: "60px"
            }}
          >
            LogIn
          </button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </div>
    </form>
  );
}