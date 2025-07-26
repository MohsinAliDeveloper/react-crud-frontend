import './App.css';
import { HashRouter } from "react-router-dom";
import CRUD from "./CRUD";
import React from 'react';

function App() {
  return (
    <HashRouter>
      <CRUD />
    </HashRouter>
  );
}

export default App;