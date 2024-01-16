import { useState } from 'react';

function Header({ currentPage, handlePageChange }) {
return (
    <section id="headertitle">
        <div id="FirstNameHeader" href="#Home" onClick={() => handlePageChange('Home')}>Emma</div>
        <div id="LastNameHeader" href="#Home" onClick={() => handlePageChange('Home')}>Denton</div>
    </section>
  );
}

export default Header;