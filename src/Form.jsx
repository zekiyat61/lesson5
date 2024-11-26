import { useState } from "react";
import "./App.css"

const Form = ({ onLogin }) => {
  const [nameInput, setNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(nameInput, passwordInput);
  };
  return (
    <div className=" container">
    <form className="Formstyle" onSubmit={handleSubmit}>
      <label>UserName</label>
      <br />
      <input
        value={nameInput}
        onChange={(event) => {
          setNameInput(event.target.value);
        }}
      />
      <br />
      <label>Password</label>
      <br />
      <input
        value={passwordInput}
        onChange={(event) => {
          setPasswordInput(event.target.value);
        }}
      />
      <br />
      <button>Login</button>
    </form>
    </div>
  );
};
export default Form;