import React, {} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./Test";
import Guideline from "./Guideline";
import Score from "./Score";
import Level from "./Level"
import Test_2 from "./Test_2"
import Test_3 from "./Test_3"
import Home from "./Home"
import Dashboard from './components/dashboard';

const App = () => {

  console.log("apple");
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Guideline/>}></Route>
        <Route path='/Test' element={<Test/>}></Route>
        <Route path='/Score' element={<Score/>}></Route>
        <Route path='/Level' element={<Level/>}></Route>
        <Route path='/Test_2' element={<Test_2/>}></Route>
        <Route path='/Test_3' element={<Test_3/>}></Route>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/Dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
