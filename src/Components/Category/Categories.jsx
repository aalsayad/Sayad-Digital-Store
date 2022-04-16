import Category from "./Category";
import categoriesData from "./categoriesData";
import "./categories.styles.scss";

const Categories = () => {
  const mappedCategories = () => {
    const mapped = categoriesData.map(({ id, title, subtitle, img }) => {
      return <Category key={id} title={title} subtitle={subtitle} img={img} id={id} />;
    });
    return mapped;
  };

  return (
    <>
      <div className="container">
        <h2>BROWSE CATEGORIES</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit tempora aempt.</p>
      </div>
      <div className="categories-container">{mappedCategories()}</div>
    </>
  );
};

export default Categories;
