import React from 'react';
import './App.css'

import { Amplify } from 'aws-amplify';
import config from './amplifyconfiguration.json';

import Header from './components/Header';
import EmployeeRoles from './components/EmployeeRoles';

Amplify.configure(config);

function App() {

  return (
    <div>
      <Header />
      <EmployeeRoles />
    </div>
  )
}

export default App
