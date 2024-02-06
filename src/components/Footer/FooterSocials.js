import React from 'react';
import PropTypes from 'prop-types';
import GitHubIcon from '../../assets/github-icon.png';
import TwitterIcon from '../../assets/twitter-icon.png';
import LinkedInIcon from '../../assets/linkedin-icon.png';
import DiscordIcon from '../../assets/discord-icon.png';

const Footer = ({ location }) => {
  const links = {
    GitHub: 'https://github.com/',
    Twitter: 'https://twitter.com/',
    LinkedIn: 'https://www.linkedin.com/',
    Discord: 'https://discord.com/',
  };

  return (
    <footer className={`footer-socials-outer-${location}`}>
      <div className="footer-socials">
        <a className="each-social-icon-outer" href={links.GitHub} target="_blank" rel="noopener noreferrer">
          <img src={GitHubIcon} alt="gitHub" className="each-social-icon" />
        </a>
        <a className="each-social-icon-outer" href={links.Twitter} target="_blank" rel="noopener noreferrer">
          <img src={TwitterIcon} alt="twitter" className="each-social-icon" />
        </a>
        <a className="each-social-icon-outer" href={links.LinkedIn} target="_blank" rel="noopener noreferrer">
          <img src={LinkedInIcon} alt="linkedIn" className="each-social-icon" />
        </a>
        <a className="each-social-icon-outer" href={links.Discord} target="_blank" rel="noopener noreferrer">
          <img src={DiscordIcon} alt="discord" className="each-social-icon" />
        </a>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  location: PropTypes.string.isRequired,
};

export default Footer;
