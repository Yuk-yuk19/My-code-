import { useState } from "react";
import { Link } from "react-router";
import "./Register.css";
import logo from "./Logo_Appli.png";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      firstName,
      email,
      password,
      confirmPassword,
    });
  }
    return (

<div className="register-container">
      
      <img 
        src={logo} alt="Gamity Logo" className="logo" />
      
      <h1>Welcome to Gamity</h1>

      <form className="form" onSubmit={handleSubmit}>

        <label>Pseudonyme</label>
        <input
          type="text"
          placeholder="Yukimisu"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="nom@email.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Mot de passe</label>
        <input
          type="password"
          placeholder="********"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>Confirmer le mot de passe</label>
        <input
          type="password"
          placeholder="********"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit">Créer mon compte</button>
         
         <div className="nav-buttons"> 

         <Link to="/login">
          <button>Connexion</button>
        </Link> 
      </div>

      </form>
    </div>
  );
}
