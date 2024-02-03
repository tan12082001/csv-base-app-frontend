import React from 'react';
import AppRouter from './AppRouter';
import { AnalyticsIcon, DashboardIcon } from '../assets/Icons';
import SideNav from './Navigation/SideNav';

function App() {
  return (
    <div className="App">
      <p>Total app here</p>
      <AppRouter />
      <SideNav />
    </div>
  );
}

export default App;
