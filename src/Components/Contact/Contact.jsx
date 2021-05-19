import { useState } from 'react';
import "./Contact.scss";
import Git from '../../images/git.png';
import Twitter from '../../images/twitter.png';
import Link from '../../images/linkedin.png';


const Contact = () => {
      const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };


    return (
        <div className="contact" id = "contact">
             <div className="left">
                <div className="imgContainer">
                    
                
        <a href="https://github.com/Msenat7432/Msenat7432" class="git">
        <img src={Git} alt="" />
        </a> 
         <a href="https://twitter.com/ToTheMax20"  >
        <img src={Twitter} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/max-senat-5490361ba/" class="link">
        <img src={Link} alt=""/>
        </a>
        </div>
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    
        </div>
    );
  };

export default Contact;