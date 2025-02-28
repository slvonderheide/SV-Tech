import React from 'react';

interface AboutMeProps {
  name: string;
}

const AboutMe: React.FC<AboutMeProps> = ({ name }) => {
  return (
    <section id="about-me" style={styles.section}>
      <h2 style={styles.h2}>About Me</h2>
      <p style={styles.paragraph}>
        Hello! I'm {name}, a passionate software developer.
      </p>
      <p style={styles.paragraph}>
        In my free time, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge with others.
      </p>
    </section>
  );
};

// Optional: Define some styles
const styles = {
  section: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    margin: '20px 0',
  },
  h2: {
    fontSize: '2rem',
    marginBottom: '10px',
  },
  paragraph: {
    fontSize: '1rem',
    lineHeight: '1.5',
  },
};

export default AboutMe;