import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import NavScrollExample from './components/NavBar';
import Banner from './components/banner';
import Skills from './components/skills';
import MyProject from './components/myProject';
import GetInTouch from "./components/getInTouch";
import Cards from './components/projectCards';
import ThirdSection from './components/3rdSection';
import Footer from './components/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <BrowserRouter>
                <NavScrollExample />
                <Banner />
                <Skills />
                <MyProject />
                <Routes>
                    <Route path='/Cards' element={<Cards />} />
                    <Route path='/ThirdSection' element={<ThirdSection />} />
                </Routes>
                <GetInTouch/>
                <Footer/>
            </BrowserRouter>
            
        </div>
    );
}

export default App;
