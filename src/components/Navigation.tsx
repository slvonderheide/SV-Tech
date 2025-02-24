export default function NavTile() {
    return (
      <div style={styles.tile}>
        <a href="/" style={styles.link}>
          Home
        </a>
      </div>
    );
  }
import React from 'react';

const Navigation: React.FC = () => {
    return (
      <nav style={styles.nav}>
        <NavTile title="Home" path="/" />
        <NavTile title="About Me" path="/about-me" />
        <NavTile title="Portfolio" path="/portfolio" />
        <NavTile title="Contact" path="/contact" />
      </nav>
    );
  };
  
  const styles = {
    nav: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
  };
  
  export default Navigation;