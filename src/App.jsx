import React from "react";
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from "./Components/Footer";
import Category from './pages/Category'
import Recipe from "./pages/Recipe";
import NotFound from "./pages/NotFound";

function App() {

  return (
    <div className="app">
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/category/:name" element={<Category/>} />
          <Route path="/meal/:id" element={<Recipe/>}/>
          <Route element={<NotFound/>}/>
        </Routes>

      <Footer />
    </div>
  );
}

export default App;
