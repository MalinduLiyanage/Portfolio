import React from 'react'
import './Header_Component.css'

export default function Header(props) {
    return (
      <div className="portfolio-container">
        <div className="portfolio-box">
          <div className="portfolio-image">
            <img src="https://avatars.githubusercontent.com/u/136006504?v=4" alt="Profile" />
          </div>
          <div className="portfolio-info">
            <h1>Malindu Liyanage</h1>
            <p><strong>Undergraduate - Rajarata University of Sri Lanka</strong></p>
            <p><code>Software Developer | AI/ML Enthusiast</code></p>
            <div className="portfolio-icons">
              <a href="mailto:malindumadhubashana@gmail.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-google"></i>
              </a>
              <a href="https://fb.com/malindumliyanage" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i> 
              </a>
              <a href="https://api.whatsapp.com/send?phone=94717278304" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i> 
              </a>
              <a href="https://github.com/MalinduLiyanage" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/malindu-liyanage" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
    </div>
    );
  }

