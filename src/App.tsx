import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import SigninScreen from './screens/SigninScreen';

function App() {
  return (
    <div className="App">
      <HomeScreen />
      {/* <SigninScreen /> */}
    </div>
  );
}

export default App;
