import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import ConteneurGlobal from './ConteneurGlobal';
import { BrowserRouter as Router } from 'react-router-dom';

const baseName = (window.location.hostname.search(/github\.io/i)!==-1) ? "/Panier-Achats" : "";

ReactDOM.render(
  <React.StrictMode>
    <Router basename={baseName}>
      <ConteneurGlobal />
    </Router>
  </React.StrictMode>,
  document.getElementById('appli')
);
