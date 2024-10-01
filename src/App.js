import "./App.scss";
import bgImg from "./bg-img.jpg";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

function App() {
  const [phone, setPhone] = useState("");

  return (
    <div className="App">
      <div className="relative min-h-screen">
        <img
          src={bgImg}
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div
          id="register"
          className="font-broadsheet text-black w-full max-w-md mx-auto py-20 text-center relative"
        >
          <h2 className="text-4xl">Register for updates</h2>

          <div className="flex flex-col space-y-2">
            <form className="flex flex-col space-y-2 items-stretch">
              <input
                type="email"
                placeholder="Email*"
                autocomplete="email"
                className="input"
              />
              <input type="number" placeholder="Phone*" className="input" />
              <button class="register-button">Register</button>
              {/* <div className="flex items-stretch space-x-2 flex-grow">
                <PhoneInput
                  className="input"
                  defaultCountry="gb"
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                />
              </div> */}
              <p className="text-small my-4 leading-snug">
                By signing up you are consenting to receive emails from
                Frequency Wizards Ltd. We will keep you up to date with any
                relevant events. You can unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
