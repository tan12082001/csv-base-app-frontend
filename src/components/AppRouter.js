import React, { useState } from 'react';
import {
  BrowserRouter as Router, Route, Routes, Navigate,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import LandingPage from '../pages/Auth/LandingPage';
import UploadPage from '../pages/Upload/UploadPage';
import DashboardPage from '../pages/Dashboard/DashboardPage';
import SchedulePage from '../pages/MockPages/SchedulePage';
import InvoicePage from '../pages/MockPages/InvoicePage';
import CalendarPage from '../pages/MockPages/CalendarPage';
import NotificationPage from '../pages/MockPages/NotificationPage';
import SettingsPage from '../pages/MockPages/SettingsPage';
import SideNav from './Navigation/SideNav';
import AppHeader from './Header/AppHeader';
import UserSignUp from './SignUp/SignUpComp';

const AppRouter = () => {
  const userAuthStatus = useSelector((state) => state.userAuth.userAuth);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToogle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleCloseNav = () => {
    setIsNavOpen(false);
  };

  return (
    <Router>
      {!userAuthStatus ? (
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<UserSignUp />} />
        </Routes>
      ) : (
        <>
          <SideNav isNavOpen={isNavOpen} onCloseNav={handleCloseNav} />
          <div className="header-page-div">
            <AppHeader onNavToggle={handleNavToogle} />
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/upload" element={<UploadPage />} />
              <Route path="/invoice" element={<InvoicePage />} />
              <Route path="/schedule" element={<SchedulePage />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/notifications" element={<NotificationPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </div>
        </>
      )}
    </Router>
  );
};

export default AppRouter;
