import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
//!pages
import Home from "./Components/_Routes/Home.page";
import Shop from "./Components/_Routes/Shop.page";
import Contact from "./Components/_Routes/Contact.page";
import SignIn from "./Components/_Routes/SignIn.page";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index={true} element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
