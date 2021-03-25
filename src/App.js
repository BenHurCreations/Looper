import React from 'react';
import './App.css';
import Header from "./components/app_structure/Header";
import Footer from "./components/app_structure/Footer";
import MusicSession from "./components/record_art/MusicSession";
import LoopersBoard from "./components/looper_machine/LoopersBoard";

function App() {
  return (
    <span className="App">
      <Header/>
      <span id="backi"></span>
      <MusicSession/>
      <LoopersBoard/>
      <Footer/>
    </span>
  );
}

export default App;
