import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <a
        href="https://github.com/slvonderheide"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.link}
      >
        <FaGithub size={30} />
      </a>
      <span style={styles.separator}> | </span>
      <a
        href="https://www.linkedin.com/in/stacyvonderheide-b53a3962/"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.link}
      >
        <FaLinkedin size={30} />
      </a>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '20px',
    backgroundColor: '#282c34',
    color: 'white',
    textAlign: 'center' as const,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
  separator: {
    margin: '0 10px',
    color: 'white',
  },
};

export default Footer;
