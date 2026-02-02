import { useState } from 'react';
import { Link, useNavigate } from "react-router";
import './login.css';
import logo from './Logo_Appli.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
    navigate('/dashboard');
  };
    return (
         <div className="register-container">
           
      <img src={logo} alt="Gamity Logo" className="logo" />
      
      <h1>Welcome to Gamity</h1>

      <form className="form" onSubmit={handleSubmit}>

        <label>Email</label>
        <input 
          type="email" 
          placeholder="name@email.com"
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required
        />

        <label>Password</label>
        <input 
          type="password"
          placeholder="Your password"
          value={password} 
          onChange={(e)=> setPassword(e.target.value)} 
          required
        />

        <button type="submit">Login</button>
        
        <div className="nav-buttons">
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
      
      </form>
    </div>
  );
}
