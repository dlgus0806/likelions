import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
// eslint-disable-next-line
import Home from "./pages/Home";
// import main from './pages/main';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/home1" element={<>main</>}></Route>
        <Route path="/home2" element={<>page</>}></Route>
      </Routes>
    </Router>
    // <Route path="/main" exact component={main}></Route>
  );
}

export default App;
