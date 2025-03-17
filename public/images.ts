import React from 'react';
import myImage from './assets/public/Employee.png';
import avatar from './assets/public/avatar.png';

const Portfolio: React.FC = () => {
  return (
    <div>
      <h1>My Portfolio</h1>
      <div className="project-card">
        <img src={myImage} alt="App Description" className="project-image" />
        <h2>App Title</h2>
        <p>App description goes here.</p>
      </div>
    </div>
  );
};

export default Portfolio;
export { myImage, avatar };