import React from 'react';

interface AboutMeProps {
  name: string;
}

const AboutMe: React.FC<AboutMeProps> = ({ name }) => {
  return (
    <section id="about-me" className="card about-me-section">
      <div className="avatar-container">
        <img src="/avatar.png" alt={`${name}'s Avatar`} className="avatar" />
      </div>
      <h2>About Me</h2>
      <p>
        Hello! I'm <strong>{name}</strong>, a passionate software developer with a background in education.
      </p>
      <p>
        With over 13 years of experience as a Special Education Teacher, I've fostered inclusive, supportive learning environments. Now, I'm transitioning into a Full Stack Developer role, where I can leverage my problem-solving, communication, and technical skills.
      </p>
      <p>
        I’m currently focused on building web applications using technologies like HTML, CSS, JavaScript, React, Node.js, and SQL. I’m excited to bring my adaptability, collaboration skills, and technical expertise to a fast-paced development team.
      </p>
    </section>
  );
};

export default AboutMe;
