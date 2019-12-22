import React from 'react';
import './App.css';
import TableNakamas from './components/table-nakamas/TableNakamas';
import CardNakamas from './components/card-nakamas/CardNakamas';


function App() {
  return (
    <div className="App">
      <TableNakamas />
      <hr/>
      <CardNakamas />
    </div>
  );
}

export default App;
