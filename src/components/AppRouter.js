// import LandingPage from '../pages/auth/LandingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UploadPage from '../pages/Upload/UploadPage';
import DashboardPage from '../pages/Dashboard/DashboardPage';
import SchedulePage from '../pages/MockPages/SchedulePage';
import InvoicePage from '../pages/MockPages/InvoicePage';
import CalendarPage from '../pages/MockPages/CalendarPage';
import NotificationPage from '../pages/MockPages/NotificationPage';
import SettingsPage from '../pages/MockPages/SettingsPage';
import SideNav from './Navigation/SideNav';
import AppHeader from './Header/AppHeader';

const AppRouter = () => (
  <Router>
    <SideNav />
    <div className="header-page-div">
      <AppHeader />
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/invoice" element={<InvoicePage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/notifications" element={<NotificationPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </div>
  </Router>
);

export default AppRouter;
