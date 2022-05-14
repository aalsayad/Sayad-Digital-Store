import { useState } from "react";
// input - error;

const SignupFormInput = (props) => {
  const { label, onChange, id, errorMessage, ...inputProps } = props;
  const [isFocused, setisFocused] = useState(false);
  const handleBlur = (e) => {
    setisFocused(true);
  };

  return (
    <div className="relative">
      <label>{label}</label>
      <input
        onChange={onChange}
        {...inputProps}
        onBlur={handleBlur}
        focused={isFocused.toString()}
      />

      <p className="x__icon absolute">✖</p>
      <div className="input-error-popdown relative">
        {errorMessage.map((error) => (
          <li key={error} className="invalid-entry__li">
            <span>✖</span>
            {error}
          </li>
        ))}
      </div>
    </div>
  );
};

export default SignupFormInput;
