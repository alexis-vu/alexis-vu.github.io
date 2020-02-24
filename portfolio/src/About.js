import React from "react"

function About(props) {
  return (
    <section id="about" className="s-about target-section">
        <div className="row narrow section-intro has-bottom-sep">
          <div className="col-full text-center">
            <h3>About</h3>
          </div>
        </div>
        <div className="row about-content">
          <div className="col-six tab-full left">
            <h3>Hello!</h3>
            <p>I'm a fourth-year student currently studying computer science at the University of California, Irvine.</p>
            <p>
              I was born and raised in Southern California and am grateful to have grown up in such a warm, beautiful, and diverse place. Being raised in an untraditional Asian-American household with a free-spirited & creative mother and a straightforward & practical father, paved way for my multifaceted life path thus far.
            </p>
            <p>
              Taking influence from both sides, I grew up loving music and fashion, in addition to technology. Prior to studying computer science, I dreamt of creating with a career in fashion design. However, it wasn't until I attended community college where I discovered my love for computer science.
            </p>
            <p>
              Today, I still dream of creating however, now as a Software Engineer with a passion for design and development.
            </p>
          </div>
          <div className="col-six tab-full right">
            <h3>Skills</h3>
            <ul className="skill-bars">
              <li>
                <div className="progress percent85"><span>85%</span></div>
                <strong>C</strong>
              </li>
              <li>
                <div className="progress percent90"><span>90%</span></div>
                <strong>C++</strong>
              </li>
              <li>
                <div className="progress percent90"><span>90%</span></div>
                <strong>Java</strong>
              </li>
              <li>
                <div className="progress percent85"><span>85%</span></div>
                <strong>Python</strong>
              </li>
              <li>
                <div className="progress percent70"><span>70%</span></div>
                <strong>Swift</strong>
              </li>
            </ul>
          </div>
        </div>

        {/* CONTENT BUTTONS */}

        <div className="row about-content about-content--buttons">
           <div className="col-six tab-full left">
             <a href="#0" className="btn btn--primary full-width">View My Resume</a>
           </div>
           <div className="col-six tab-full right">
             <a href="#0" className="btn full-width">Contact Me</a>
           </div>
        </div>
      </section>
  );
}

export default About;
