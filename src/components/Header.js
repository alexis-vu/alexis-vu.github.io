import React from 'react';

function Header(props) {
  return (
    <header>
        <div className="head-top">
          <a href="#" className="menu-btn"><span /></a>
          <div className="top-menu">
            <ul>
              <li><a href="index.html"> <span className="ion ion-home" /> </a></li>
              <li><a href="resume.html" className="lnk">Resume</a></li>
              <li><a href="portfolio.html" className="lnk">Portfolio</a></li>
              <li><a href="blog.html" className="lnk">Blog</a></li>
              <li><a href="contacts.html" className="btn">Contacts</a></li>
            </ul>
          </div>
        </div>
      </header>
  );
}

export default Header;
