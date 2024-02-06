import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

const UserSignIn = () => {
  console.log('component from signincomp');

  return (
    <GoogleLogin
      onSuccess={reponse => {
        console.log(reponse);
      }}
      onError={() => {
        console.log('Login Failed');
      }}
      useOneTap
    />
  );
};

export default UserSignIn;
