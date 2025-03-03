import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';


const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <a href="https://github.com/slvonderheide" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} />
      </a>
      <a href="https://www.linkedin.com/in/stacyvonderheide-b53a3962/" target="_blank" rel="noopener noreferrer">
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
    color: '#61dafb', 
  },
  separator: {
    margin: '0 5px',
  },
};

export default Footer;