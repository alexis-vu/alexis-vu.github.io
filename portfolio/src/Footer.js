import React from "react"

function Footer(props) {
  return(
    <footer>
        <div className="row">
          <div className="col-full">
            <div className="footer-logo">
              <a className="footer-site-logo" href="#0"><img src="images/logo.png" alt="Homepage" /></a>
            </div>
            <ul className="footer-social">
              <li><a href="#0">
                  <i className="im im-facebook" aria-hidden="true" />
                  <span>Facebook</span>
                </a></li>
              <li><a href="https://www.instagram.com/legziz/">
                  <i className="im im-instagram" aria-hidden="true" />
                  <span>Instagram</span>
                </a></li>
              <li><a href="https://github.com/alexis-vu">
                  <i className="im im-github" aria-hidden="true" />
                  <span>Github</span>
                </a></li>
            </ul>
          </div>
        </div>
        <div className="row footer-bottom">
          <div className="col-twelve">
            <div className="copyright">
              <span>© Copyright Hola 2017</span>
              <span>Design by <a href="https://www.styleshout.com/">styleshout</a></span>
            </div>
            <div className="go-top">
              <a className="smoothscroll" title="Back to Top" href="#top"><i className="im im-arrow-up" aria-hidden="true" /></a>
            </div>
          </div>
        </div> {/* end footer-bottom */}
      </footer>
  );
}

export default Footer;
