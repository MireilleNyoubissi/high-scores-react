import React from "react";
import Table from "./Table.js";
import allCountryScores from "./scores.js";
import './App.css';

function App() {
  return (
    <div className="table-container">  
        <h1>High Scores per Country</h1>            
        <Table data={allCountryScores.sort((a, b) => a.name.localeCompare(b.name))} />
    </div>
  );
}

export default App;
