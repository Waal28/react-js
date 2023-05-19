import React, { useState, useRef } from "react";

const FormText = () => {
  const textField = useRef(null);
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    const text = textField.current.value;
    setText(text);
    textField.current.value = "";
  };
  return (
    <div>
      <h2>Form</h2>
      <input type="text" name="text" id="text" ref={textField} />
      <button onClick={onSubmit} type="submit">
        Submit
      </button>
      <p>Text : {text}</p>
    </div>
  );
};

export default FormText;
