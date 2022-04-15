import "./App.css";
import Category from "./Components/Category/Category";
import categoriesData from "./Components/Category/categoriesData";

const App = () => {
  const mappedCategories = () => {
    const mapped = categoriesData.map(({ id, title, subtitle, img }) => {
      return <Category key={id} title={title} subtitle={subtitle} img={img} />;
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
