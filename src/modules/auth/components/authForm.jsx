import React, { useRef, useState } from 'react';

function AuthForm({ onSubmit }) {
  const inputRef = useRef();

  const [info, setInfo] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorCallback = () => inputRef.current?.focus();
    onSubmit(info.username, info.password, errorCallback);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        name="username"
        onChange={handleInputChange}
        value={info.username}
        ref={inputRef}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleInputChange}
        value={info.password}
      />
      <button type="submit">Login / Register</button>
    </form>
  );
}

export default AuthForm;
