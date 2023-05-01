//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './Components/Header';
import Section1 from './Components/Section1';
import Section3 from './Components/Section3';
import Section4 from './Components/Section4';

function App() {
  return (
    <main className="App">
      <Header />
      <Section1 />
      <Section3 />
      <Section4 />
    </main>
  );
}

export default App;
