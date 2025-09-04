import React from 'react';

function Resume() {
  return (
    <section id="resume" className="resume-section">
      <h2>My Resume</h2>
      <p>Email: shishirdevkota3@gmail.com | Phone: +9779846351902</p>
      <p>Location: Pokhara-02, Miruwa | GitHub: <a href="https://github.com/SHI-SHIR" target="_blank" rel="noopener noreferrer">SHI-SHIR</a></p>

      <div className="resume-content">
        <h3>Career Objective</h3>
        <p>
          Motivated Computer Engineering student with a solid foundation in HTML, CSS, JavaScript, and ReactJS.
          Passionate about creating responsive, user-friendly web applications and eager to contribute to real-world projects through a Frontend Internship.
        </p>

        <h3>Education</h3>
        <p>
          Bachelor in Computer Engineering<br/>
          Gandaki College of Engineering and Science, Pokhara, Lamachaur<br/>
          2022 – Present (7th Semester) 
        </p>

        <h3>Skills</h3>
        <ul>
          <li>Frontend: HTML5, CSS3, JavaScript (ES6+), ReactJS</li>
          <li>Backend: Node.js, Express.js</li>
          <li>Database: MongoDB, MySQL</li>
          <li>Tools & Others: Git, GitHub, VS Code</li>
        </ul>

        <a href="/resume.pdf" download className="download-btn">Download Full Resume</a>
      </div>
    </section>
  );
}

export default Resume;
