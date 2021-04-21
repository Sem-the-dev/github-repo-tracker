import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Form() {
  const [name, setName] = useState("");
  const [nameInput, setNameInput] = useState("");

  const dispatch = useDispatch();

  const updateInput = (e) => setNameInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(nameInput);
    setNameInput("");
  };

  return (
    <div>
      <h2>Hi {name ? name : "Githubber"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your github username"
          value={nameInput}
          onChange={updateInput}
          id="text-input"
        />
        <input type="submit" value="submit" id="submit-button"/>
      </form>
    </div>
  );
}

export default Form;
