import { Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/_Routes/Home";
import Shop from "./Components/_Routes/Shop";
import Contact from "./Components/_Routes/Contact";
import SignIn from "./Components/_Routes/SignIn";

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
