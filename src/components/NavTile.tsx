import React from 'react';
//import { Link } from 'react-router-dom';

interface NavTileProps {
  title: string;
  path: string;
}

const NavTile: React.FC<NavTileProps> = ({ title, path }) => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'scale(1.05)';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <div
      style={styles.tile}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={path} style={styles.link}>
        {title}
      </Link>
    </div>
  );
};

const styles = {
  tile: {
    padding: '20px',
    margin: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    transition: 'transform 0.2s',
    cursor: 'pointer',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
  },
};

export default NavTile;