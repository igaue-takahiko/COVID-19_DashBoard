import React from 'react';
import './App.css';
import Cards from './features/covid/Cards/Cards';
import Chart from './features/covid/Chart/Chart';

const App = () => {
    return (
        <div className="App">
        <header className="App-header">
            <Cards />
            <Chart />
        </header>
        </div>
    );
}

export default App;
