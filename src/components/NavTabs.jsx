import { useState } from 'react';
function NavTabs({ currentPage, handlePageChange }) {
  const [isNavigatorOpen, setIsNavigatorOpen] = useState(false);

  const toggleNavigator = (event) => {
    event.stopPropagation();
    setIsNavigatorOpen(!isNavigatorOpen);
  };

  const handleLinkClick = (page, event) => {
    event.preventDefault();
    handlePageChange(page);
  };

  return (
    <div>
      <div>
        <button className={`icon ${isNavigatorOpen ? 'toggled' : ''}`} onClick={toggleNavigator}>
          <div id="navicon"></div>
        </button>
      </div>
      <nav className={`navigator ${isNavigatorOpen ? 'open' : 'closed'}`}>
        <ul>
          <li>
            <a href="#" onClick={(e) => handleLinkClick('About', e)}
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
              About
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => handleLinkClick('Projects', e)}
              className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>
              Projects
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => handleLinkClick('Resume', e)}
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
              Resume
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => handleLinkClick('Contact', e)}
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavTabs;
