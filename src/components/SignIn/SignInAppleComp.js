import React from 'react';
import AppleIcon from '../../assets/appliICon.png';

const SignInWithApple = () => (
  <button type="button" id="apple-sign-in-button">
    <img src={AppleIcon} alt="apple-icon" className="apple-img" />
    <span className="apple-signin-text">Sign in with Apple</span>
  </button>
);

export default SignInWithApple;
