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
        <li><a href="#Contact" onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a></li>
        <li><button id="dropbtn" onClick={() => handlePageChange('Project')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</button></li>
        <li>
          <button className={`dropbtn ${isDropdownVisible ? 'toggled' : ''}`} onClick={toggleDropdown}
            >Projects</button>
          {isDropdownVisible && (
            <div id="dropdown-container">
          <li><a class="dropdown-visible" id="P1" href="#" onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Project 1</a></li>
          <li><a class="dropdown-visible" id="P2" href="#" onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Project 2</a></li>
          <li><a class="dropdown-visible" id="P3" href="#"onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Project 3</a></li>
            </div>
          )}
        </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavTabs;
