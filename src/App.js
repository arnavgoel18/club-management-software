import React from 'react';
import NavBar from './Components/Navigation/NavBar';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavOpt from './Components/NavOption/NavOpt';
import HomePage from './Containers/HomePage/HomePage';

function App() {
  return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage/>} />
          </Routes>
        </Router>
      </>
  );
}

export default App;
