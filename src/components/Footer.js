import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Trippy</h1>
          <p>hhbndbbhd</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square" />
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square" />
          </a>
          <a href="/">
            <i className="fa-brands fa-github-square" />
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square" />
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4> Projects </h4>
          <a href="/"> Changelog</a>
          <a href="/"> Status</a>
          <a href="/"> License</a>
          <a href="/"> All versions</a>
        </div>
        <div>
          <h4> Community </h4>
          <a href="/"> Github</a>
          <a href="/"> Issues</a>
          <a href="/"> Project</a>
          <a href="/"> Twitter</a>
        </div>
        <div>
          <h4> Help </h4>
          <a href="/"> Support</a>
          <a href="/"> Troubleshooting</a>
          <a href="/"> Contact</a>
        </div>
        <div>
          <h4> Other </h4>
          <a href="/"> Terms of Service</a>
          <a href="/"> Privacy Policy</a>
          <a href="/"> License</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
