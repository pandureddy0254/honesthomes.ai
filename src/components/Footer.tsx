const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div>
          <h3>HonestHomes.ai</h3>
          <p>
            Intelligent real estate discovery built for the nuances of the Indian market. We blend
            trusted data with generative AI to bring radical transparency to property decisions.
          </p>
        </div>
        <div>
          <h4>Visit us</h4>
          <p>
            91Springboard, Koramangala
            <br /> Bengaluru, Karnataka 560047
          </p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>+91 98765 43210</p>
          <p>hello@honesthomes.ai</p>
        </div>
        <div>
          <h4>Follow</h4>
          <div className="footer-links">
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
            <a href="#">YouTube</a>
          </div>
        </div>
      </div>
      <p className="footer-bottom">© {new Date().getFullYear()} HonestHomes.ai. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
