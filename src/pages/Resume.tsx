import React from 'react';
import './Resume.css'; // Assuming your CSS file is named Resume.css
import Stacy_Resume from '../assets/public/Stacy_Resume.pdf'; 

const Resume: React.FC = () => {
  return (
    <div className="resume-container">
      <h2 className="section-title">My Resume</h2>
      <a href="/Stacy_Resume.pdf" download="Stacy_Resume.pdf" className="download-link">
  Download Resume
</a>

      <h3 className="section-title">Front-end Proficiencies</h3>
      <div className="button-container">
        <button onClick={() => window.open('https://developer.mozilla.org/en-US/docs/Web/HTML', '_blank')} className="tech-button">
          HTML
        </button>
        <button onClick={() => window.open('https://developer.mozilla.org/en-US/docs/Web/CSS', '_blank')} className="tech-button">
          CSS
        </button>
        <button onClick={() => window.open('https://developer.mozilla.org/en-US/docs/Web/JavaScript', '_blank')} className="tech-button">
          JavaScript
        </button>
        <button onClick={() => window.open('https://reactjs.org/docs/getting-started.html', '_blank')} className="tech-button">
          React
        </button>
      </div>

      <h4 className="section-title">Back-end Proficiencies</h4>
      <div className="button-container">
        <button onClick={() => window.open('https://nodejs.org/en/docs/', '_blank')} className="tech-button">
          Node.js
        </button>
        <button onClick={() => window.open('https://expressjs.com/en/starter/installing.html', '_blank')} className="tech-button">
          Express.js
        </button>
        <button onClick={() => window.open('https://sequelize.org/master/', '_blank')} className="tech-button">
          Sequelize
        </button>
        <button onClick={() => window.open('https://www.mysql.com/', '_blank')} className="tech-button">
          MySQL
        </button>
        <button onClick={() => window.open('https://www.postgresql.org/docs/', '_blank')} className="tech-button">
          PostgreSQL
        </button>
      </div>

      <h4 className="section-title">Tools and Technology</h4>
      <div className="button-container">
        <button onClick={() => window.open('https://git-scm.com/doc', '_blank')} className="tech-button">
          Git
        </button>
        <button onClick={() => window.open('https://code.visualstudio.com/', '_blank')} className="tech-button">
          VS Code
        </button>
        <button onClick={() => window.open('https://insomnia.rest/', '_blank')} className="tech-button">
          Insomnia
        </button>
        <button onClick={() => window.open('https://render.com/', '_blank')} className="tech-button">
          Render
        </button>
      </div>
    </div>
  );
};

export default Resume;
