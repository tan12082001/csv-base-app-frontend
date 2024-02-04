import React from "react";
import { Link, useLocation } from "react-router-dom";
import LogoBlue from "../../assets/logo-blue.png";
import DashboardIcon from '../../assets/dashboard-icon.png'
import AnalyticsIcon from '../../assets/Chart.png';
import InvoiceIcon from "../../assets/Ticket.png";
import ScheduleIcon from "../../assets/Document.png";
import CalendarIcon from "../../assets/Calendar.png";
import NotificationIcon from "../../assets/Notification.png";
import SettingsIcon from "../../assets/Setting.png";

const SideNav = () => {
  const location = useLocation();

  const navLinks = [
    {
      to: "/dashboard",
      label: "Dashboard",
      iconSrc: DashboardIcon,
      iconAlt: "Dashboard Icon",
    },
    {
      to: "/upload",
      label: "Upload",
      iconSrc: AnalyticsIcon,
      iconAlt: "Upload Icon",
    },
    {
      to: "/invoice",
      label: "Invoice",
      iconSrc: InvoiceIcon,
      iconAlt: "Invoice Icon",
    },
    {
      to: "/schedule",
      label: "Schedule",
      iconSrc: ScheduleIcon,
      iconAlt: "Schedule Icon",
    },
    {
      to: "/calendar",
      label: "Calendar",
      iconSrc: CalendarIcon,
      iconAlt: "Calendar Icon",
    },
    {
      to: "/notifications",
      label: "Notification",
      iconSrc: NotificationIcon,
      iconAlt: "Notification Icon",
    },
    {
      to: "/settings",
      label: "Settings",
      iconSrc: SettingsIcon,
      iconAlt: "Settings Icon",
    },
  ];

  return (
    <nav className="flex-column">
      <div className="nav-head-logo">
        <img src={LogoBlue} alt="Base-Logo" className="nav-logo-img" />
        <h3 className="nav-logo-text">Base</h3>
      </div>
      <ul className="nav-links-menu flex-column">
        {navLinks.map(({ to, label, iconSrc, iconAlt }) => (
          <li key={to}>
            <Link
              to={to}
              className={`each-nav-link-a ${
                location.pathname === to ? "active" : ""
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

export default SideNav;
