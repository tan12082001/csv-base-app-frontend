import React from 'react';
import LandingLogo from '../../assets/logo-white-300.png';
import Footer from '../Footer/FooterSocials';

const BaseLanding = () => {
  const text = 'from baselanding';

  console.log(text);

  return (
    <div className="base-landing-outer">
      <div className="app-title-socials">
        <div className="skew-background" />
        <div className="app-landing-logo">
          <img src={LandingLogo} alt="base-logo" className="landing-logo-img" />
        </div>
        <div className="app-landing-title">Base</div>
        <Footer />
      </div>
      <div className="landing-user-auth-outer">
        <div className="landing-user-auth-inner">
          <div className="landing-user-auth-title-tagline">
            <h1 className="sign-in-title">Sign In</h1>
            <p className="sign-in-tagline">Sign in to your account</p>
          </div>
          {/* {google signin div here} */}
          <div className="sign-in-email-password-register-div">
            <form className="sign-in-email-password">
              <div className="form-elements">
                <label htmlFor="user-email" className="label-input">
                  <span>Email address</span>
                  <input
                    type="email"
                    id="user-email"
                    name="email"
                    placeholder="johndoe@gmail.com"
                  />
                </label>
              </div>
              <div className="form-elements">
                <label htmlFor="user-password" className="label-input">
                  <span>Password</span>
                  <input type="password" id="user-password" name="password" />
                </label>
              </div>
              <div className="form-elements">
                <button type="button" id="forgot-password-page-action">
                  Forgot password?
                </button>
              </div>
              <div className="form-elements">
                <button type="submit" id="sign-in-button-action">
                  Sign In
                </button>
              </div>
            </form>
          </div>
          <div className="user-register-div">
            <span className="register-tagline-button">
              <span className="register-tagline-text">
                Don&apos;t have an account?
                {' '}
              </span>
              <button type="button" id="user-register-action">
                Register here
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseLanding;
