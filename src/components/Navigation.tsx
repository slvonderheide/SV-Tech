import React from 'react';
import NavTile from './NavTile';

const styles = {
  nav: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
};


const Navigation: React.FC = () => {
    return (
      <nav style={styles.nav}>
        <NavTile title="Home" path="/home" />
        <NavTile title="About Me" path="/about-me" />
        <NavTile title="Portfolio" path="/portfolio" />
        <NavTile title="Contact" path="/contact" />
        <NavTile title="Resume" path="/resume" />
      </nav>
    );
  };
  
  
  export default Navigation;