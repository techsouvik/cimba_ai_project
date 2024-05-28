import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ApiForm from './components/ApiForm';
import History from './components/History';

const App = () => {
  const [history, setHistory] = useState([]);

  const addHistory = (entry) => {
    setHistory([...history, entry]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<ApiForm addHistory={addHistory} />} />
            <Route path="/history" element={<History history={history} setHistory={setHistory} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
