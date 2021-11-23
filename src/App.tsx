import './App.css';

import Players from './Players';
import PlayerBio from './PlayerBio';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <h1> My Fantasy Football Team</h1>

        <Routes>
          <Route path="/" element={<Players />} />
          <Route path="/:name" element={<PlayerBio />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
