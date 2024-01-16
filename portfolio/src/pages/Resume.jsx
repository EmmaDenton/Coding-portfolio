import React from 'react';

function Resume() {
  return (
    <div>
        <div>My Resume</div>
        <a className="resumedownload" href="../assets/ExampleResume.pdf" download="ExampleResume.pdf">
        Download my resume
      </a>
      <div>My Skills</div>
      <p></p>
    </div>
  );
}

export default Resume;
