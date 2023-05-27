import React, { useState } from "react";
import { SelectField, TextField } from "./TextField";

export const FormUncontrolled = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const brand = e.target.brand.value;
    const model = e.target.model.value;
    const color = e.target.color.value;
    const cc = e.target.cc.value;
    console.log(brand, model, color, cc);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Car Input</h1>
      <TextField name="brand" type="text" />
      <SelectField name="model" option={["Sedan", "SUV", "MPV", "Matchback"]} />
      <TextField name="color" type="color" />
      <TextField name="cc" type="number" />
      <button type="submit">Submit</button>
    </form>
  );
};

export const FormControlled = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [cc, setCc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(brand, model, color, cc);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Car Input Controlled</h1>
      <div>
        {brand} <br />
        {model} <br />
        <div
          style={{
            background: color,
            height: "30px",
            width: "30px",
            margin: "auto",
          }}
        ></div>
        {cc} <br />
      </div>
      <TextField name="brand" value={brand} onChange={setBrand} type="text" />
      <SelectField
        name="model"
        value={model}
        onChange={setModel}
        option={["Sedan", "SUV", "MPV", "Matchback"]}
      />
      <TextField name="color" value={color} onChange={setColor} type="color" />
      <TextField name="cc" value={cc} onChange={setCc} type="number" />
      <button type="submit">Submit</button>
    </form>
  );
};
