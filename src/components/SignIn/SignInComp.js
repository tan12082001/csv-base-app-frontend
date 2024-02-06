import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../redux/userAuthSlice';

const UserSignIn = () => {
  const dispatch = useDispatch();

  const handleUserLogin = () => {
    dispatch(userLogin());
  };

  return (
    <GoogleLogin
      onSuccess={() => {
        handleUserLogin();
      }}
      useOneTap
    />
  );
};

export default UserSignIn;
