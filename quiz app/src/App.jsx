import React from 'react';
import './App.css';
import Quiz from './components/quiz';
import Footer from './components/Footer'; // Correct path to Footer component
import Header from './components/Header';
function App() {
    return (
        <div className="app-container">
          <Header />{}
          <h1>Welcome to the quiz app</h1>
            <Quiz /> {/* Include the Quiz component */}
            <Footer /> {/* Include the Footer component */}
        </div>
    );
}

export default App;