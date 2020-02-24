import React from "react"

function Home(props) {
  return (
    <section id="home" className="s-home page-hero target-section" data-parallax="scroll" data-image-src="%PUBLIC_URL%/images/hero-bg.jpg" data-natural-width={3000} data-natural-height={2000} data-position-y="center">
        <div className="overlay" />
        <div className="shadow-overlay" />
        <div className="home-content">
          <div className="row home-content__main">
            <h3>Hello There</h3>
            <h1>
              I'm Alexis Vu.
            </h1>
            <h4> Software Engineer </h4>
            <div className="home-content__buttons">
              <a href="#works" className="smoothscroll btn btn--stroke">
                Projects
              </a>
              <a href="#about" className="smoothscroll btn btn--stroke">
                More About Me
              </a>
            </div>
            <div className="home-content__scroll">
              <a href="#about" className="scroll-link smoothscroll">
                <span>Scroll Down</span>
              </a>
            </div>
          </div>
        </div> {/* end home-content */}
        <ul className="home-social">
          <li>
            <a href="#"><i className="im im-facebook" aria-hidden="true" /><span>Facebook</span></a>
          </li>
          <li>
            <a href="https://www.instagram.com/legziz/"><i className="im im-instagram" aria-hidden="true" /><span>Instagram</span></a>
          </li>
          <li>
            <a href="https://github.com/alexis-vu"><i className="im im-github" aria-hidden="true" /><span>Github</span></a>
          </li>
        </ul>
      </section>
  );
}

export default Home;
