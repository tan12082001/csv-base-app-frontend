import React from 'react';
import UserAppLogOut from '../../components/SignIn/SignOutComp';

const SettingsPage = () => {
  console.log('user can log out');
  return (
    <div className="common-page-outer">
      Logout from the Webpage.
      <UserAppLogOut />
    </div>
  );
};

export default SettingsPage;
