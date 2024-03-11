import React from 'react';
import './App.css'

import { Amplify } from 'aws-amplify';
import config from './amplifyconfiguration.json';

import Header from './components/Header';


Amplify.configure(config);

function App() {

  return (
    <div>
      <Header />
    </div>
  )
}

export default App
