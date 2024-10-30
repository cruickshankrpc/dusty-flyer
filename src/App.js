import "./App.scss";
import bgPic from "./images/bg-pic.jpg";
import logo from "./images/DFC-logo.png";
import instagramIcon from "./images/instagram.png";
import emailIcon from "./images/email.png";
import facebookIcon from "./images/facebook.png";

function App() {
  return (
    <div className="App">
      <div>
        <img src={bgPic} alt="bg" className="bg-img" />
        <div className="content">
          <img className="logo" alt="Dusty Flyers' Logo" src={logo}></img>
          <h2 className="chantal-font">The ride of your life, guaranteed</h2>
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
