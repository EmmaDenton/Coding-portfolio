// TODO: Add a comment explaining how we are able to extract the key value pairs from props

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div>
    <div>
      <button class="icon">
        <div id="navicon"></div>
      </button>
    </div>
    <nav class="navigator">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><button id="dropbtn">Projects</button></li>
        <div id="dropdown-container">
          <li><a class="dropdown-visible" id="P1" href="#">Project 1</a></li>
          <li><a class="dropdown-visible" id="P2" href="#">Project 2</a></li>
          <li><a class="dropdown-visible" id="P3" href="#">Project 3</a></li>
        </div>
      </ul>
    </nav>
  </div> 
  );
}

export default NavTabs;
