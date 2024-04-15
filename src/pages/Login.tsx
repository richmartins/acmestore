import React, { useState } from "react";
import Button from "../components/Button";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Perform login logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <>
      <h1 className="font-bold">Login Page</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="my-5">
          <label htmlFor="username">Username</label>
          <input
            className="w-full border-2 border-gray-300 p-2 rounded-md"
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="my-5">
          <label htmlFor="password">Password</label>
          <input
            className="w-full border-2 border-gray-300 p-2 rounded-md"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <Button text="Login" type="submit" onClick={handleSubmit} />
      </form>
    </>
  );
};

export default Login;
