import React from 'react';

function Resume() {
  return (
    <div id='resumecontainer'>
        <div id="resume-title">My Resume</div>
        <a className="resumedownload" href="./src/assets/ExampleResume.pdf" download="ExampleResume.pdf">
        Download my resume
      </a>
      <li className='skillslist'></li>
    </div>
  );
}

export default Resume;
