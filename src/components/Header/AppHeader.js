import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import BellIcon from '../../assets/header-bell-icon.png';
import UserImg from '../../assets/mock-user-img.png';
import SearchIcon from '../../assets/Icons';

const AppHeader = () => {
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
        setPageTitle(titleMapping[location.pathname] || 'Unknown page');
    }, [location.pathname]);

    return (
        <div className="page-header">
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
    )
};

export default AppHeader;
