import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import BellIcon from '../../assets/header-bell-icon.png';
import UserImg from '../../assets/mock-user-img.png';
import SearchIcon from '../../assets/Icons';
import BlueLogo from '../../assets/logo-blue.png';
import HamBurger from '../../assets/burger-regular.png';

const AppHeader = ({ onNavToggle }) => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    const titleMapping = {
      '/dashboard': 'Dashboard',
      '/upload': 'Upload CSV',
      '/invoice': 'Invoices',
      '/schedule': 'Schedule',
      '/calendar': 'Calendar',
      '/notifications': 'Notification',
      '/settings': 'Settings',
    };
    setPageTitle(titleMapping[location.pathname] || '');
  }, [location.pathname]);

  return (
    <div className="page-header">
      <div className="mobile-header-div-outer">
        <div className="mobile-header">
          <button type="button" id="header-hamburger-button" onClick={onNavToggle}>
            <img src={HamBurger} alt="hamburger" className="header-hamburger" />
          </button>
          <img src={BlueLogo} alt="blue-logo" className="mobile-header-logo" />
          <h2 className="mobile-header-title">Base</h2>
        </div>
        <div className="header-title">{pageTitle}</div>
        <div className="search-bell-user-div">
          <div className="search-bar">
            <SearchIcon />
            <input className="search-input-bar" type="search" name="search" />
          </div>
          <div className="bell-icon">
            <img src={BellIcon} alt="bell-icon" className="header-bar-icon" />
          </div>
          <div className="user-icon">
            <img src={UserImg} alt="mock-user" className="header-bar-user-icon" />
          </div>
        </div>
      </div>
      <div className="mobile-header-page-title">{pageTitle}</div>
    </div>
  );
};

AppHeader.propTypes = {
  onNavToggle: PropTypes.func.isRequired,
};

export default AppHeader;
