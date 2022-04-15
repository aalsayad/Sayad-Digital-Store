import React from "react";

const Category = ({ title, subtitle, img }) => {
  return (
    <div>
      <div className="category-container">
        <img src={img} alt="" />
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
