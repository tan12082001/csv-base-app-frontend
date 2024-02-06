import React from 'react';
import { useNavigate } from 'react-router-dom';
import { googleLogout } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../redux/userAuthSlice';

const UserAppLogOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUserLogout = () => {
    dispatch(userLogout());
    navigate('/');
    googleLogout();
    console.log('user logged out successfully');
  };

  return (
    <button type="submit" id="user-logout" onClick={handleUserLogout}>Logout</button>
  );
};

export default UserAppLogOut;
