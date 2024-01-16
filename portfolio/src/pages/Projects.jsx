export default function Projects() {
    return ( 
        <section id="project-container">
        <div id="project-title">Projects</div>
        <div id="hero-card" className="card">
          <div className="card-content" id="hero-card-container">
            <div id="hero-img-container">
              <div className="card-title">Title</div>
              <img id="hero-project-image" src="./src/assets/Placeholder-hero.png" alt="Description" />
            </div> 
              <div id="hero-text-container">
                <div id="hero-card-subtitle">HTML/CSS/Javascript</div>
                <div id="hero-card-p">Placeholder text</div>
                <a>GitHub Repository</a>
                <a>Deployed App</a>
              </div>
          </div>
        </div>
          <div id="card-container">
            <div className="card" id="card-1">
              <div className="card-content">
                <div className="card-title">Title</div>
                <img className="project-image" src="./src/assets/Placeholder1.png" alt="Description" />
                <div className="card-subtitle">HTML/CSS/Javascript</div>
                <div className="card-p">Placeholder text</div>
                <a>GitHub Repository</a>
                <a>Deployed App</a>
              </div>
            </div>
          <div className="card" id="card-2">
            <div className="card-content">
              <div className="card-title">Title</div>
              <img className="project-image" src="./src/assets/Placeholder2.png" alt="Description" />
              <div className="card-subtitle">HTML/CSS/Javascript</div>
              <div className="card-p">Placeholder text</div>
              <a>GitHub Repository</a>
                <a>Deployed App</a>
            </div>
          </div>
          <div className="card" id="card-3">
            <div className="card-content">
              <div className="card-title">Title</div>
              <img className="project-image" src="./src/assets/Placeholder3.png" alt="Description" />
              <div className="card-subtitle">HTML/CSS/Javascript</div>
              <div className="card-p">Placeholder text</div>
              <a>GitHub Repository</a>
              <a>Deployed App</a>
            </div>
          </div>
          <div className="card" id="card-4">
            <div className="card-content">
              <div className="card-title">Title</div>
              <img className="project-image" src="./src/assets/Placeholder4.png" alt="Description" />
              <div className="card-subtitle">HTML/CSS/Javascript</div>
              <div className="card-p">Placeholder text</div>
              <a>GitHub Repository</a>
                <a>Deployed App</a>
            </div>
          </div>
        </div>
      </section>
    );
  }