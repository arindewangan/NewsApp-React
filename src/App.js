import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/Footer';
import About from './components/About';
import LoadingBar from 'react-top-loading-bar'


const App = () => {
  const pageSize = 8;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0);

  return (
    <div>
        <Router>
          <Navbar/>
          <LoadingBar color='#f11946' height={3} progress={progress}/>
            <Routes>
              <Route exact path="/" element={<News setProgress={setProgress} key='general' apiKey={apiKey}  pageSize={pageSize} category={'general'}/>} ></Route>
              <Route exact path="/category/sports" element={<News setProgress={setProgress} key='sports' apiKey={apiKey}  pageSize={pageSize} category={'sports'}/>} ></Route>
              <Route exact path="/category/entertainment" element={<News setProgress={setProgress} key='entertainment' apiKey={apiKey}  pageSize={pageSize} category={'entertainment'}/>} ></Route>
              <Route exact path="/category/business" element={<News setProgress={setProgress} key='business' apiKey={apiKey}  pageSize={pageSize} category={'business'}/>} ></Route>
              <Route exact path="/about" element={<About setProgress={setProgress}/>} ></Route>
            </Routes>
          <Footer/>
        </Router>
      </div>
  );
}

export default App;


