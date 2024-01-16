import { useState } from 'react';

function Header({ currentPage, handlePageChange }) {
return (
    <section id="headertitle">
        <div id="FirstNameHeader" href="#About" onClick={() => handlePageChange('About')}>Emma</div>
        <div id="LastNameHeader" href="#About" onClick={() => handlePageChange('About')}>Denton</div>
    </section>
  );
}

export default Header;