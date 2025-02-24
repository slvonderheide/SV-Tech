import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Stacy Vonderheide</h1>
      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}><a href="#about-me">About Me</a></li>
          <li style={styles.navItem}><a href="#portfolio">Portfolio</a></li>
          <li style={styles.navItem}><a href="#contact">Contact</a></li>
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
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    margin: '0',
  },
  navList: {
    listStyleType: 'none',
    padding: '0',
  },
  navItem: {
    display: 'inline',
    margin: '0 15px',
  },
};

export default Header;