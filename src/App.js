import "./App.scss";
import React from 'react'
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Products from "./components/Products/Products";
import ProItem from "./components/ProItem/ProItem";
import Collection from "./components/Collection/Collection";
import About from "./components/About/About";
import News from "./components/News/News";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="allWrapper">
      <Header />
      <Intro />
      <Products />
      <ProItem />
      <Collection />
      <About />
      <News />
      <Footer />
    </div>
  );
}

export default App;
