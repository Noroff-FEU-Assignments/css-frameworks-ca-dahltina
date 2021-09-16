import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './sass/style.scss';
import Navigation from './components/Navigation';

function App() {
  return <Router>
            <div>
              <Navigation />
            </div>
        </Router>
}

export default App;
