import React from 'react';
import './App.css';
import myPhoto from './assets/brianpogi.jpg'; 
import project1 from './assets/dog.jpg'; 
import project2 from './assets/doggg.jpg'; 
import project3 from './assets/dwag.jpg'; 


function App() {
  return (
    <div className="App">
      <header>
        <h1>My Portfolio</h1>
      </header>
      <section id="about-me">
  <h2>About Me</h2>
  <img src={myPhoto} alt="Brian Ronnie Hernandez" style={{ width: '150px', borderRadius: '50%' }} />
  <p>Hello! I'm Brian Ronnie Hernandez, and I love working on C++ projects and developing web applications. Alam mo ba sir na sobrang pogi mo po hart hart.</p>
</section>

<section id="projects">
  <h2>Projects</h2>
  <ul>
    <li>
      <h3>Project 1 ko po hehe</h3>
      <img src={project1} alt="Project 1 ko po hehe" style={{ width: '200px' }} />
    </li>
    <li>
      <h3>Project 2 naman po</h3>
      <img src={project2} alt="Project 2 naman po" style={{ width: '200px' }} />
    </li>
    <li>
      <h3>Project 3 ko po</h3>
      <img src={project3} alt="Project 3 ko po" style={{ width: '200px' }} />
    </li>
  </ul>
</section>

      <section id="contact-me">
        <h2>Contact Me</h2>
        <p>Email: Brian_ronnie_hernandez.dlsl.ph</p>
        <p>Number: 09564768712</p>
        <p>Facebook: Brian Ronnie Hernandez</p>
      </section>
    </div>
  );
}

export default App;
