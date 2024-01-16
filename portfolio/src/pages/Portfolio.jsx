export default function Portfolio() {
    return ( 
        <section id="project-container">
        <div id="project-title">Projects</div>
        <div id="hero-card" className="card">
          <div className="card-content" id="hero-card-container">
            <div id="hero-img-container">
              <div className="card-title">Title</div>
              <img id="hero-project-image" src="./assets/images/Placeholder-hero.png" alt=""> </img>
            </div>
              <div id="hero-text-container">
                <div id="hero-card-subtitle">HTML/CSS/Javascript</div>
                <div id="hero-card-p">Placeholder text</div>
              </div>
          </div>
        </div>
          <div id="card-container">
            <div className="card" id="card-1">
              <div className="card-content">
                <div className="card-title">Title</div>
                <img className="project-image" src="./assets/images/Placeholder1.png" alt=""> </img>
                <div className="card-subtitle">HTML/CSS/Javascript</div>
                <div className="card-p">Placeholder text</div>
              </div>
            </div>
          <div className="card" id="card-2">
            <div className="card-content">
              <div className="card-title">Title</div>
              <img className="project-image" src="./assets/images/Placeholder2.png" alt=""> </img>
              <div className="card-subtitle">HTML/CSS/Javascript</div>
              <div className="card-p">Placeholder text</div>
            </div>
          </div>
          <div className="card" id="card-3">
            <div className="card-content">
              <div className="card-title">Title</div>
              <img className="project-image" src="./assets/images/Placeholder3.png" alt=""> </img>
              <div className="card-subtitle">HTML/CSS/Javascript</div>
              <div className="card-p">Placeholder text</div>
            </div>
          </div>
          <div className="card" id="card-4">
            <div className="card-content">
              <div className="card-title">Title</div>
              <img className="project-image" src="./assets/images/Placeholder4.png" alt=""> </img>
              <div className="card-subtitle">HTML/CSS/Javascript</div>
              <div className="card-p">Placeholder text</div>
            </div>
          </div>
        </div>
      </section>
    );
  }