import React from 'react';
import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Stacy Vonderheide</h1>
      <Navigation/>
    </header>
  );
};

const styles = {
  header: {
    padding: '20px',
    backgroundColor: '#282c34',
    color: 'white',
    textAlign: 'center' as const,
  },
  title: {
    fontSize: '2.5rem',
    margin: '0 0 10px 0',
  },
  navList: {
    listStyleType: 'none',
    padding: '0',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  navItem: {
    display: 'inline',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.2rem',
    transition: 'color 0.3s',
  },
  navLinkHover: {
    color: '#61dafb',
  },
};

export default Header;
