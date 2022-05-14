import React from "react";
import { ErrorMessage, useField } from "formik";

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  //   console.log(field, meta);
  return (
    <div className="relative">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`input ${meta.touched && meta.error && "invalid-input"}`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error && <p className="x__icon absolute">✖</p>}
      <p className="error">
        {meta.touched && meta.error && <span>✖</span>}
        {<ErrorMessage name={field.name} />}
      </p>
    </div>
  );
};

export default TextField;
