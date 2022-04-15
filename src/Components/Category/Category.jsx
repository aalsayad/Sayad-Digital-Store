import React from "react";

const Category = ({ title, subtitle, img, description, id }) => {
  let isMainCategory;
  if (id === "one" || id === "two") isMainCategory = true;
  return (
    <div className={`category-container ${id}`}>
      <img className="category-img" src={img} alt={description} />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <button className="btn btn--browse-category">
          {isMainCategory ? `${title} Items` : `Browse ${title}`}
        </button>
      </div>
    </div>
  );
};

export default Category;
