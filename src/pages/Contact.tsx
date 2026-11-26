
import { ArrowUpRight, Mail } from "lucide-react";
import "./Contact.css";

const socials = [
  {
    name: "GitHub",
    mark: "GH",
    username: "madebyprachi",
    url: "https://github.com/madebyprachi",
  },
  {
    name: "LinkedIn",
    mark: "in",
    username: "Prachi Sharma",
    url: "https://www.linkedin.com/in/prachi-sharma-205a24441/",
  },
  {
    name: "Instagram",
    mark: "IG",
    username: "@i.ps.ix",
    url: "https://www.instagram.com/i.ps.ix/",
  },
  {
    name: "YouTube",
    mark: "YT",
    username: "@i-ps-ix",
    url: "https://youtube.com/@i-ps-ix?si=6xSP9gbOPHbfsW_q",
  },
  {
    name: "Reddit",
    mark: "R",
    username: "Sad-Pineapple-6945",
    url: "https://www.reddit.com/user/Sad-Pineapple-6945/",
  },
  {
    name: "X / Twitter",
    mark: "X",
    username: "@ip5ix",
    url: "https://x.com/ip5ix",
  },
];

function Contact() {
  return (
    <main className="inner-page contact-page">
      <section className="contact-content">
        <p className="eyebrow">04 / GET IN TOUCH</p>

        <h1>
          Have an <span>idea?</span>
        </h1>

        <p className="page-description">
          Have a project, collaboration or interesting idea?
          Let's connect and make something meaningful.
        </p>

        <a
          href="mailto:workwithipsix@gmail.com"
          className="contact-email"
        >
          <span className="contact-email-icon">
            <Mail size={18} />
          </span>
          <span>workwithipsix@gmail.com</span>
          <ArrowUpRight className="contact-email-arrow" size={19} />
        </a>
      </section>

      <section className="contact-socials">
        <div className="contact-social-heading">
          <div>
            <p className="eyebrow">ELSEWHERE ON THE INTERNET</p>
            <h2>Find me online.</h2>
          </div>
          <span className="social-count">06 / SOCIAL LINKS</span>
        </div>

        <div className="social-grid">
          {socials.map((social, index) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
            >
              <div className="social-card-top">
                <span className="social-icon-mark">
                  {social.mark}
                </span>
                <span className="social-number">
                  0{index + 1}
                </span>
              </div>

              <div className="social-card-bottom">
                <div>
                  <h3>{social.name}</h3>
                  <p>{social.username}</p>
                </div>
                <ArrowUpRight
                  className="social-arrow"
                  size={19}
                />
              </div>
            </a>
          ))}
        </div>
      </section>

      <div className="contact-bottom">
        <span>IPSIX / CONTACT</span>
        <span>LET'S MAKE SOMETHING INTERESTING.</span>
      </div>
    </main>
  );
}

export default Contact;
