import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar';
import AboutUs from './components/aboutUs';
import Home from './components/form';
import Welcome from './components/welcome';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <Router>
            <>
                <NavBar />
                <Routes>
                <Route path="/" element={<Welcome />} /> {/* Default route */}
                <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<AboutUs />} />
                    
                    {/* Add more routes as needed */}
                </Routes>
            </>
        </Router>
    );
}

export default App;
