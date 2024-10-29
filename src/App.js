import "./App.scss";
import bgPic from "./images/bg-pic.jpg";
import logo from "./images/DFC-logo.png";
import instagramIcon from "./images/instagram.png";
import emailIcon from "./images/email.png";
import facebookIcon from "./images/facebook.png";

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={bgPic} alt="bg" className="c-bg-img" />
        <div className="content">
          <img className="logo" alt="Dusty Flyers' Logo" src={logo}></img>
          <div className="icon-container">
            <a
              href="https://www.instagram.com/dustyflyersclub/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icon" src={instagramIcon} alt="Instagram Icon" />
            </a>
            <a
              href="https://www.facebook.com/dustyflyersclub/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icon" src={facebookIcon} alt="Facebook Icon" />
            </a>
            <a
              href="mailto:info@dustyflyersclub.club"
              target="_blank"
              rel="noreferrer"
            >
              <img className="email-icon" src={emailIcon} alt="Email Icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
