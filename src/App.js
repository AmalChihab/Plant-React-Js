import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <Banner />
      <Routes>
        <Route path="/Plants" element={<MainContent />} />
        <Route path="/" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
