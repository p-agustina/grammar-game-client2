import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    
    const requestBody = { email, password, name };
 
    axios.post(`${API_URL}/auth/signup`, requestBody)
      .then(() => {
        navigate('/login');
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })
  };

  return (
    <div className="SignupPage">
    <div className="authContainer">
      <h1>Sign Up</h1>

      <form onSubmit={handleSignupSubmit}>
        <label>
        <input placeholder="Name" type="text" name="name" value={name} onChange={handleName} />
        </label>
        <label>
        <input placeholder="Email Address" type="email" name="email" value={email} onChange={handleEmail} />
        </label>
        <label>
        <input
          
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
        </label>

        <button type="submit">Sign Up</button>
      </form>

      {errorMessage && <p>{errorMessage}</p>}

      <p>Already have account?</p>
      <Link to={"/login"}> <button>Login</button></Link>
      </div>
    </div>
  );
}

export default SignUp;