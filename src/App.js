import { Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Routes/Home";
import Shop from "./Components/Routes/Shop";
import Contact from "./Components/Routes/Contact";
import SignIn from "./Components/Routes/SignIn";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index={true} element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signIn" element={<SignIn />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
