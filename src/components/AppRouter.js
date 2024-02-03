// import LandingPage from '../pages/auth/LandingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from '../pages/dashboard/dashboardPage';
import UploadPage from '../pages/upload/uploadPage';
import SchedulePage from '../pages/MockPages/SchedulePage';
import InvoicePage from '../pages/MockPages/InvoicePage';
import CalendarPage from '../pages/MockPages/CalendarPage';
import NotificationPage from '../pages/MockPages/NotificationPage';
import SettingsPage from '../pages/MockPages/SettingsPage';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/upload" element={<UploadPage />} />
                <Route path="/invoice" element={<InvoicePage />} />
                <Route path="/schedule" element={<SchedulePage />} />
                <Route path="/calendar" element={<CalendarPage />} />
                <Route path="/notifications" element={<NotificationPage />} />
                <Route path="/settings" element={<SettingsPage />} />
            </Routes>
        </Router>
    )
}

export default AppRouter;
