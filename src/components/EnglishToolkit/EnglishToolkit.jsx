import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import EnglishToolkitContent from "./EnglishToolkitContent/EnglishToolkitContent";
import "./EnglishToolkit.css";
function EnglishToolkit() {
  return (
    <>
      <Navbar />
      <EnglishToolkitContent />
      <Footer />
    </>
  );
}

export default EnglishToolkit;
