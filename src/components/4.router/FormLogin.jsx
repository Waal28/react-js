import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const login = () => {
    if (username === "admin" && password === "admin") {
      navigate("/");
      return;
    }
    alert("Username atau Password salah");
  };
  return (
    <div>
      <input
        type="text"
        value={username}
        placeholder="Username"
        onChange={({ target: { value } }) => setUsername(value)}
      />{" "}
      <br />
      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={({ target: { value } }) => setPassword(value)}
      />{" "}
      <br />
      <button onClick={login}>Login</button>
    </div>
  );
};

export default FormLogin;
