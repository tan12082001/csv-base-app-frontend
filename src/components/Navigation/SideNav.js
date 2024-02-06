import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import LogoBlue from '../../assets/logo-blue.png';
import DashboardIcon from '../../assets/dashboard-icon.png';
import AnalyticsIcon from '../../assets/Chart.png';
import InvoiceIcon from '../../assets/Ticket.png';
import ScheduleIcon from '../../assets/Document.png';
import CalendarIcon from '../../assets/Calendar.png';
import NotificationIcon from '../../assets/Notification.png';
import SettingsIcon from '../../assets/Setting.png';
import CancelIcon from '../../assets/cross-icon.png';

const SideNav = ({ isNavOpen, onCloseNav }) => {
  const location = useLocation();

  const handleNavLinkClick = () => {
    onCloseNav();
  };

  const navLinks = [
    {
      to: '/dashboard',
      label: 'Dashboard',
      iconSrc: DashboardIcon,
      iconAlt: 'Dashboard Icon',
    },
    {
      to: '/upload',
      label: 'Upload',
      iconSrc: AnalyticsIcon,
      iconAlt: 'Upload Icon',
    },
    {
      to: '/invoice',
      label: 'Invoice',
      iconSrc: InvoiceIcon,
      iconAlt: 'Invoice Icon',
    },
    {
      to: '/schedule',
      label: 'Schedule',
      iconSrc: ScheduleIcon,
      iconAlt: 'Schedule Icon',
    },
    {
      to: '/calendar',
      label: 'Calendar',
      iconSrc: CalendarIcon,
      iconAlt: 'Calendar Icon',
    },
    {
      to: '/notifications',
      label: 'Notification',
      iconSrc: NotificationIcon,
      iconAlt: 'Notification Icon',
    },
    {
      to: '/settings',
      label: 'Settings',
      iconSrc: SettingsIcon,
      iconAlt: 'Settings Icon',
    },
  ];

  return (
    <nav className={`${isNavOpen ? 'open' : ''}`}>
      <div className="nav-head-logo">
        <img src={LogoBlue} alt="Base-Logo" className="nav-logo-img" />
        <h3 className="nav-logo-text">Base</h3>
        <button type="button" id="close-nav-button" onClick={onCloseNav}>
          <img src={CancelIcon} alt="cancel" className="close-nav-bar" />
        </button>
      </div>
      <ul className="nav-links-menu flex-column">
        {navLinks.map(({
          to, label, iconSrc, iconAlt,
        }) => (
          <li key={to}>
            <Link
              to={to}
              onClick={handleNavLinkClick}
              className={`each-nav-link-a ${
                location.pathname === to ? 'active' : ''
              }`}
            >
              <img src={iconSrc} alt={iconAlt} className="nav-link-icon" />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

SideNav.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
  onCloseNav: PropTypes.func.isRequired,
};

export default SideNav;
