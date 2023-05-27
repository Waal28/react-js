import { PropTypes } from "prop-types";
import { useState } from "react";

export const TextField = (props) => {
  const [errorMassage, setErrorMassage] = useState("");
  const handleChange = (e) => {
    if (props.onChange) {
      const validationResult = props.validationFunc(e.target.value);
      if (validationResult !== true) {
        setErrorMassage(validationResult);
      }
      props.onChange(e.target.value);
    }
  };
  return (
    <div>
      <h2>{props.name}</h2>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={handleChange}
      />
    </div>
  );
};
TextField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  validationFunc: PropTypes.func,
};

export const SelectField = (props) => {
  const handleChange = (e) => {
    if (props.onChange) {
      props.onChange(e.target.value);
    }
  };
  return (
    <div>
      <h2>TextField</h2>
      <select name={props.name} value={props.value} onChange={handleChange}>
        {props.option.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  option: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
