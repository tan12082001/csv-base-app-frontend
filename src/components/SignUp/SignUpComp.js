import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserSignUp = () => {
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate('/');
  };

  return (
    <div className="user-signup-outer">
      <button type="button" id="back-to-root-button" onClick={handleBackButton}>&#x2190;</button>
      <span>UserSignUp Page</span>
    </div>
  );
};

export default UserSignUp;
