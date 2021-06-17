import React from 'react';
import { CountdownMinutes } from './CountdownMinutes';
import { CountdownHours } from './CountdownHours';
import './App.css';

function App() {
  return (
    <div className="App">
        <div>
           Quedan <CountdownHours /> horas, <CountdownMinutes /> minutos para las 12:00:00 de la noche.
        </div>
    </div>
  );
}

export default App;
