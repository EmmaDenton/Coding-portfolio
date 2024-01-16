import React, { useState } from 'react';

function Contact() {
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setIsValid(true); 
  };
  const handleInputBlur = () => {
    if (!inputValue) { 
      setIsValid(false); 
      alert('Please enter a valid name'); 
    }
  };

  return (
    <section id="contactme-container">
      <div id="contactme-title">Contact Me</div>
      <div className='inputcontainer'>
      <input className="input"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur} 
        placeholder="Name"
      />
            <input className="input"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur} 
        placeholder="Email address"
      />
            <input className="messageInput"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur} 
      />
      <button id="messagesubmitbtn">Send</button>
      </div>
    </section>
  );
}

export default Contact;
