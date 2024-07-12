import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import RegisterPeople from './pages/RegisterPeople';
import RegisterTeam from './pages/RegisterTeam';
import RegisterSuccess from './pages/RegisterSuccess';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" component={<Home />} />
        <Route path="/register-step1" component={<RegisterPeople />} />
        <Route path="/register-step2" component={<RegisterTeam />} />
        <Route path="/register-step3" component={<RegisterSuccess />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
