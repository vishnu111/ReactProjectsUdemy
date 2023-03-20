import logo from "./logo.svg";
import Header from "./components/Header";
import ProfileHead from "./components/ProfileHead";
import Info from "./components/Info";
import Calc from "./components/Calc";
import Skills from "./components/Skills";
import Port from "./components/Port";
import Exp from "./components/Exp";
import Edu from "./components/Edu";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";
import "./App.css";
import "./main.css";
import "./aos.css";
import "./bootstrap.min.css";
import "./github-calender-responsive.css";

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className="page-content">
        <div>
          <ProfileHead />
        </div>
      </div>
      <Info />
      <div className="section" id="about">
        <div>
          <h2>API CALL TO FETCH IMAGES BASED ON OUR SEARCH TERM</h2>
        </div>
        <div className="container">
          <SearchBar onSubmit={handleSubmit} />
          <ImageList images={images} />
        </div>
      </div>
      <Calc />
      <Skills />
      <Port />
      <Exp />
      <Edu />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
