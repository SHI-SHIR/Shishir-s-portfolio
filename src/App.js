import React from 'react';
import Navbar from './Components/Navbar';
import ProjectCard from './Components/ProjectCard';
import Resume from './Components/Resume';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Navbar />

      <header className="hero">
        <h1>Hello, I'm Shishir</h1>
        <p>Full-Stack Developer | ReactJS Enthusiast</p>
      </header>

      <section className="projects-section" id="projects">
        <h2>My Projects</h2>
        <div className="projects-container">
          <ProjectCard
            title="Travel Blog Web Application"
            description="Full-stack travel blog platform with ReactJS, Express.js, Prisma, and MySQL. Responsive frontend design, authentication, and CRUD operations."
            link="https://github.com/SHI-SHIR/Travel-blog-app-using-React-Express-and-Prisma-MySql"
          />
          <ProjectCard
            title="MERN Notes Web Application"
            description="Full-stack note-taking app with MongoDB, Express.js, ReactJS, Node.js. JWT authentication and responsive UI."
            link="https://github.com/SHI-SHIR/mern-notes-app"
          />
          <ProjectCard
            title="Expense Tracker Web Application"
            description="ReactJS client-side app for tracking income and expenses. Uses React hooks, Context API, and local storage."
            link="https://github.com/SHI-SHIR/react-expense-tracker"
          />
          <ProjectCard
            title="To-do List Web Application"
            description="ReactJS to-do app with dynamic state handling and local storage. Clean, responsive UI."
            link="https://github.com/SHI-SHIR/To-do-list-using-React"
          />
        </div>
      </section>

      <Resume />

      <Footer />
    </div>
  );
}

export default App;
