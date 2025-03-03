import React from "react";
//import employee from "../assets/images/employee.png"; 

interface Project {
  id: number;
  title: string;
  description: string;
  deployedLink: string;
  githubLink: string;
  image: string;  // New field for image URL
}

const projects: Project[] = [
  {
    id: 1,
    title: "Adventure From Scratch",
    description: "A fun webpage that allows users to fill out their own adventure story.",
    deployedLink: "https://bharcourt27.github.io/Project1/",
    githubLink: "https://github.com/bharcourt27/Project1",
    image: "https://github.com/bharcourt27/Project1/blob/main/Form.png?raw=true",
  },
  {
    id: 2,
    title: "ReadMe-Buddy-Bot",
    description: "A command line application that helps create a README file.",
    deployedLink: "https://drive.google.com/file/d/1uJx5wLWyZ4BllPyxUeFvRFkoKHGero7n/view?usp=sharing",
    githubLink: "https://github.com/slvonderheide/ReadMe-Buddy-Bot",
    image: "https://bootcampspot.instructure.com/users/87630/files/3507046/preview?verifier=YPwcm1qJdMzqlTSBgVrBiWQBq1ivjzljDP1e961h",
  },
  {
      id: 3,
      title: "Employee Database",
      description: "The Employee Tracker is a command-line interface application...",
      deployedLink: "https://drive.google.com/file/d/1fpbEhZnEBd_tZ0hpWQL_Gjv7-lj9efEh/view?usp=sharing",
      githubLink: "https://github.com/slvonderheide/EmployeeDatabase",
      image: "/employee.png",  
    },
  {
    id: 4,
    title: "vehicleBuilder",
    description: "A command line application that allows you to create or use previous vehicles. User can complete actions with the vehicle.",
    deployedLink: "https://drive.google.com/file/d/1eJtuIb98M69VwoRcVFPhj8l-Kgf8EGr8/view?usp=sharing",
    githubLink: "https://github.com/slvonderheide/vehicleBuilder",
    image: "/vehicle.png", 
  },
  {
    id: 5,
    title: "Marking Agency",
    description: "A website for a Marketing Company.",
    deployedLink: "file:///C:/Users/slvon/bootcamp/OSU-VIRT-FSF-PT-11-2024-U-LOLC/01-HTML-Git-CSS/02-Challenge/Develop/index.html",
    githubLink: "https://github.com/slvonderheide",
    image: "/marketing.png", 
  },
  {
    id: 6,
    title: "Employee Payroll Tracker",
    description: "A social media app with features like posting and commenting.",
    deployedLink: "file:///C:/Users/slvon/bootcamp/OSU-VIRT-FSF-PT-11-2024-U-LOLC/03-JavaScript/02-Challenge/Develop/index.html",
    githubLink: "https://github.com/slvonderheide",
    image: "/payroll.png", // Replace with your image URL
  },
];
const Portfolio: React.FC = () => {
  return (
    <div className="portfolio-container">
      <h1>My Portfolio</h1>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                View Deployed App
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                View GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
