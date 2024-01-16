import React from 'react';

function Resume() {
  return (
    <div id='resumecontainer'>
        <div id="resume-title">My Resume</div>
      <ul className='skillslist'>
      <li>HTML</li>
      <li>CSS</li>
      <li>Javascript</li>
      <li>Web APIs</li>
      <li>Node.js</li>
      <li>Express.js</li>
      <li>MySQL</li>
      <li>NoSQL</li>
      <li>MondoDB</li>
      <li>React</li>
      </ul>
      <a className="resumedownload" href="./src/assets/ExampleResume.pdf" download="ExampleResume.pdf">
        Download my resume
      </a>
    </div>
  );
}

export default Resume;
