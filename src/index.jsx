import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import ConteneurGlobal from './ConteneurGlobal';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ConteneurGlobal />
    </Router>
  </React.StrictMode>,
  document.getElementById('appli')
);
