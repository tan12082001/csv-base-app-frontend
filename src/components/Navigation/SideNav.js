import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/upload">Upload</Link>
      </li>
      <li>
        <Link to="/invoice">Invoice</Link>
      </li>
      <li>
        <Link to="/schedule">Schedule</Link>
      </li>
      <li>
        <Link to="/calendar">Calendar</Link>
      </li>
      <li>
        <Link to="/notifications">Notification</Link>
      </li>
      <li>
        <Link to="/settings">Settings</Link>
      </li>
    </ul>
  </nav>
);

export default SideNav;
