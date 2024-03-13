import React from 'react';
import './App.css'

import { Amplify } from 'aws-amplify';
import config from './amplifyconfiguration.json';

import Header from './components/Header';
import EmployeeRoles from './components/EmployeeRoles';
import Clearances from './components/Clearances';
import Achievements from './components/Achievements';

Amplify.configure(config);

function App() {

  return (
    <div>
      <Header />
      <EmployeeRoles />
      <Clearances />
      <Achievements />
    </div>
  )
}

export default App
