import React from 'react';
import './App.css';
import Student from './student.js';

function App() {
  return (
    <div>
      <h1><Student SName="mahad" Sid="9038"/> </h1>
      <h1><Student SName="haris" Sid="9131"/> </h1>
      <h1><Student SName="zeeshan" Sid="9024"/> </h1>
    </div>
  );
}

export default App;
