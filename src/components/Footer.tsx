import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>Connect with me:</p>
      <div style={styles.links}>
        <a
          href="https://github.com/slvonderheide"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
          aria-label="Visit my GitHub profile"
        >
          GitHub
        </a>
        <span style={styles.separator}> | </span>
        <a
          href="https://www.linkedin.com/in/stacyvonderheide-b53a3962/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
          aria-label="Visit my LinkedIn profile"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

// Optional: Define some styles
const styles = {
  footer: {
    padding: '20px',
    backgroundColor: '#282c34',
    color: 'white',
    textAlign: 'center',
  },
  text: {
    margin: '0',
    fontSize: '1rem',
  },
  links: {
    marginTop: '10px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
  linkHover: {
    color: '#61dafb', // Change this to your desired hover color
  },
  separator: {
    margin: '0 5px',
  },
};

export default Footer;