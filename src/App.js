import dictionary from "./dictionary.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={dictionary} className="dictionary-icon" alt="logo" />
      </header>

      <footer>
        This project was coded by Nadie Ivanitska and is{" "}
        <a
          href="https://github.com/NadieIvi/react-weather-final"
          target="_blank"
          rel="noreferrer"
        >
          open-soursed on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://lovely-taffy-3e2a51.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
        <a
          href="https://www.flaticon.com/free-icons/dictionary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dictionary icons created by Freepik - Flaticon
        </a>
      </footer>
    </div>
  );
}

export default App;
