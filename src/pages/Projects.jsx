export default function Projects() {
    return ( 
        <section id="project-container">
        <div id="project-title">Projects</div>
        <div id="hero-card" className="card">
          <div className="card-content" id="hero-card-container">
            <div id="hero-img-container">
              <div className="card-title">Work Day Scheduler</div>
              <img id="hero-project-image" src="../../public/assets/Workscheduler.png" alt="Description" />
            </div> 
              <div id="hero-text-container">
                <div id="hero-card-subtitle">HTML/CSS/Javascript</div>
                <div id="hero-card-p">This project is a 9am 5pm day planner.

The hour will change colour to indicate if it is in the present, past or future. Hours in the present are red, hours in the past are grey and hours in the future are green.

The user can input text into the center column for each hour. They can click the blue save button to save their entry to the their local storage.</div>
                <a className="project-links" href="https://github.com/EmmaDenton/workday-calendar/tree/main" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                <a className="project-links" href="https://emmadenton.github.io/workday-calendar/" target="_blank" rel="noopener noreferrer">Deployed App</a>
              </div>
          </div>
        </div>
          <div id="card-container">
            <div className="card" id="card-1">
              <div className="card-content">
                <div className="card-title">CalShare</div>
                <img className="project-image" src="../../public/assets/CalShare-screenshot-01.png" alt="Deployed calendar sharing application" />
                <div className="card-subtitle">Node/MySQL/Handlebars</div>
                <div className="card-p">CalShare is a scheduling platform designed to optimize the process of organizing meetings. This application allows individuals to seamlessly integrate their schedules, highlighting mutually available time slots for efficient meeting planning.</div>
                <a className="project-links" href="https://github.com/Danyon-Talbot/P2-CalShareLinks to an external site." target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                <a className="project-links" href="https://sleepy-castle-96589-687879c1fd68.herokuapp.com/loginLinks to an external site. " target="_blank" rel="noopener noreferrer">Deployed App</a>
              </div>
            </div>
          <div className="card" id="card-2">
            <div className="card-content">
              <div className="card-title">Note Taker</div>
              <img className="project-image" src="../../public/assets/notetaker.png" alt="Deployed note taker application" />
              <div className="card-subtitle">Node/MongoDB</div>
              <div className="card-p">This project is a note taking website. Users can write new notes, return to previously saved notes and delete previously saved notes.</div>
              <a className="project-links" href=" https://github.com/EmmaDenton/NoteTakerLinks to an external site." target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                <a className="project-links" href=" https://young-ravine-73369-3b0df2cce978.herokuapp.com/Links to an external site. " target="_blank" rel="noopener noreferrer">Deployed App</a>
            </div>
          </div>
          <div className="card" id="card-3">
            <div className="card-content">
              <div className="card-title">Weather App</div>
              <img className="project-image" src="../../public/assets/notetaker.png" alt="Description" />
              <div className="card-subtitle">HTML/CSS/Javascript</div>
              <div className="card-p">This project is a weather dashboard that allows users to search for weather information based on a city. Upon searching, the site retrieves the latitude and longitude of the city, which is then used to fetch the current and future weather conditions for the next 5 days.</div>
              <a className="project-links" href="https://github.com/EmmaDenton/Weather-DashboardLinks to an external site." target="_blank" rel="noopener noreferrer">GitHub Repository</a>
              <a className="project-links" href="https://emmadenton.github.io/Weather-Dashboard/" target="_blank" rel="noopener noreferrer">Deployed App</a>
            </div>
          </div>
          <div className="card" id="card-4">
            <div className="card-content">
              <div className="card-title">Text Editor</div>
              <img className="project-image" src="../../public/assets/Texteditor.png" alt="Deployed text editor application" />
              <div className="card-subtitle">Node/MongoDB</div>
              <div className="card-p">This application is a single-page application Progressive Web App (PWA). It incorporates various data persistence methods to provide backup options in case certain methods are not supported by the user's browser. Additionally, the application has an offline functionality.</div>
              <a className="project-links" href="https://github.com/EmmaDenton/text-editor" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
              <a className="project-links" href="https://texteditor30000.onrender.com" target="_blank" rel="noopener noreferrer">Deployed App</a>
            </div>
          </div>
          <div className="card" id="card-5">
            <div className="card-content">
              <div className="card-title">GameGenius</div>
              <img className="project-image" src="../../public/assets/gamegenius.jpg" alt="Deployed Game search application" />
              <div className="card-subtitle">HTML/CSS/Javascript</div>
              <div className="card-p">GameGenius is a user-friendly platform that provides tailored game recommendations to players. Relish in personalized suggestions, an extensive game library. Unearth exceptional games effortlessly with GameGenius.</div>
              <a className="project-links" href="https://github.com/MuhammadKhabbaz/GameGeniusLinks" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
              <a className="project-links" href="https://muhammadkhabbaz.github.io/GameGenius/Links" target="_blank" rel="noopener noreferrer">Deployed App</a>
            </div>
          </div>
        </div>
      </section>
    );
  }