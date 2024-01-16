import React, { useState } from 'react';


function NavTabs({ currentPage, handlePageChange }) {
  const [isNavigatorOpen, setIsNavigatorOpen] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleNavigator = () => {
    event.stopPropagation();
    setIsNavigatorOpen(!isNavigatorOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
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
        <li><a href="#About" onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</a></li>
        <li><a href="#Projects" onClick={() => handlePageChange('Projects')}
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>Project</a></li>
        <li><a href="#Resume" onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a></li>
          <li><a href="#Contact" onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavTabs;
