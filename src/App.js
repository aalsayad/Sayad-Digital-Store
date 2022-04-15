import "./App.css";
import Category from "./Components/Category/Category";
import categoriesData from "./Components/Category/categoriesData";
import "./Components/Category/categories.styles.scss";

const App = () => {
  const mappedCategories = () => {
    const mapped = categoriesData.map(({ id, title, subtitle, img }) => {
      return <Category key={id} title={title} subtitle={subtitle} img={img} id={id} />;
    });
    return mapped;
  };

  return (
    <>
      <div className="categories-container">{mappedCategories()}</div>
    </>
  );
};

export default App;
