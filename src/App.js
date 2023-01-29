import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/partials/header';
import Footer from './components/partials/footer';
import Home from './components/Home/home';
import About from './components/About/about';
import TTT from './components/TTT/ttt';

function App() {
    return (
        <div className="container bg-light px-0">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/ttt" element={<TTT />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;