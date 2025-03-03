import React from 'react';

interface AboutMeProps {
  name: string;
}

const AboutMe: React.FC<AboutMeProps> = ({ name }) => {
  return (
    <section id="about-me" style={styles.section}>
      <div style={styles.avatarContainer}>
        {/* Reference directly to the public directory */}
        <img src="/avatar.png" alt={`${name}'s Avatar`} style={styles.avatar} />
      </div>
      <h2 style={styles.h2}>About Me</h2>
      <p style={styles.paragraph}>
        Hello! I'm <strong>{name}</strong>, a passionate software developer with a background in education.
      </p>
      <p style={styles.paragraph}>
        With over 13 years of experience as a Special Education Teacher, I've fostered inclusive, supportive learning environments. Now, I'm transitioning into a Full Stack Developer role, where I can leverage my problem-solving, communication, and technical skills. My experience with personalized learning strategies has equipped me with a user-centered approach to design and accessibility, ensuring that technology is not only functional but also inclusive and impactful.
      </p>
      <p style={styles.paragraph}>
        I’m currently focused on building web applications using technologies like HTML, CSS, JavaScript, React, Node.js, and SQL. I’m excited to bring my adaptability, collaboration skills, and technical expertise to a fast-paced development team.
      </p>
    </section>
  );
};

// Define styles for the About Me section
const styles: { [key: string]: React.CSSProperties } = {
  section: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    margin: '20px 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '100%',
  },
  avatarContainer: {
    marginBottom: '20px',
  },
  avatar: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  h2: {
    fontSize: '2rem',
    marginBottom: '10px',
    color: '#333',
  },
  paragraph: {
    fontSize: '1rem',
    lineHeight: '1.5',
    color: '#333',
  },
};

export default AboutMe;
