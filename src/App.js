import React from 'react';
import './styles/index.scss';
import Dashboard from './components/Dashboard';
import NavPanel from './components/NavPanel';

function App() {
  return (
    <React.Fragment>
      <NavPanel/>
      <Dashboard/>
    </React.Fragment>
  );
}

export default App;
