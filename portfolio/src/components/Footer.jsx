import { useState } from 'react';

function Footer({ currentPage, handlePageChange }) {
return (
    <ul id="contactme-nav">
    <li className="contact-link"><a>Github</a></li> 
    <li className="contact-link"><a>Codepen</a></li> 
    <li className="contact-link"><a>Email</a></li>
    <li className="contact-link"><a>Linkedin</a></li>
    </ul>
  );
}

export default Footer;