import React from 'react';
import './App.css'
import { Header } from './components/header/Header'
import { Main } from './components/main/main';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@500;700&display=swap');
</style>

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
