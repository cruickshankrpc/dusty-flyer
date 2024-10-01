import "./App.scss";
import bgImg from "./bg-img.jpg";
function App() {
  return (
    <div className="App">
      <div className="relative min-h-screen">
        <img
          src={bgImg}
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div id="register" className="w-full max-w-md mx-auto text-center">
          <h2 className="font-broadsheet text-4xl">Register for updates</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
