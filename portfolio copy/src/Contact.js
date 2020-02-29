import React from "react"

function Contact(props) {
  return (
    <section id="contact" className="s-contact target-section">
        <div className="overlay" />
        <div className="row narrow section-intro">
          <div className="col-full">
            <h3>Contact</h3>
            <h1>Say Hello.</h1>
          </div>
        </div>
        <div className="row contact__main">
          <div className="col-eight tab-full contact__form">
            <form name="contactForm" id="contactForm" method="post" action="http://localhost:3000/sendEmail.php">
              <fieldset>
                <div className="form-field">
                  <input name="contactName" type="text" id="contactName" placeholder="Name" aria-required="true" className="full-width" />
                </div>
                <div className="form-field">
                  <input name="contactEmail" type="email" id="contactEmail" placeholder="Email" aria-required="true" className="full-width" />
                </div>
                <div className="form-field">
                  <input name="contactSubject" type="text" id="contactSubject" placeholder="Subject" className="full-width" />
                </div>
                <div className="form-field">
                  <textarea name="contactMessage" id="contactMessage" placeholder="Message" aria-required="true" className="full-width" defaultValue={""} />
                </div>
                <div className="form-field">
                  <button className="full-width btn--primary">Submit</button>
                  <div className="submit-loader">
                    <div className="text-loader">Sending...</div>
                    <div className="s-loader">
                      <div className="bounce1" />
                      <div className="bounce2" />
                      <div className="bounce3" />
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
            {/* contact-warning */}
            <div className="message-warning">
              Something went wrong. Please try again.
            </div>
            {/* contact-success */}
            <div className="message-success">
              Your message was sent, thank you!<br />
            </div>
          </div>
          <div className="col-four tab-full contact__infos">
            <h4 className="h06">Phone</h4>
            <p>Phone: +1 (714) 473-5800<br />
              Mobile: +1 (714) 422-8444
            </p>
            <h4 className="h06">Email</h4>
            <p>alexis.lauren.vu@gmail.com
            </p>
            <h4 className="h06">Location</h4>
            <p>
              Irvine, CA<br />
            </p>
          </div>
        </div>
      </section>
  );
}

export default Contact;
