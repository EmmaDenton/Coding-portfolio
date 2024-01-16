import { useState } from 'react';

function Footer({ currentPage, handlePageChange }) {
return (
    <ul id="contactme-nav">
    <li className="contact-link"><a href="https://github.com/EmmaDenton/" target="_blank" rel="noopener noreferrer">Github</a></li> 
    <li className="contact-link"><a href="https://codepen.io/EmmaDenton/" target="_blank" rel="noopener noreferrer">Codepen</a></li> 
    <li className="contact-link"><a href="mailto: edenton34@gmail.com" target="_blank" rel="noopener noreferrer">Email</a></li>
    <li className="contact-link"><a href="https://www.linkedin.com/in/emma-denton-1283b0182/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>

    </ul>
  );
}

export default Footer;