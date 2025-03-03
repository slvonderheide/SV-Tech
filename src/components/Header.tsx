import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Stacy Vonderheide</h1>
      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <a href="#about-me" style={styles.navLink}>About Me</a>
          </li>
          <li style={styles.navItem}>
            <a href="#portfolio" style={styles.navLink}>Portfolio</a>
          </li>
          <li style={styles.navItem}>
            <a href="#contact" style={styles.navLink}>Contact</a>
          </li>
        </ul>
      </nav>
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
