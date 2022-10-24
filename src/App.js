import dictionary from "./dictionary.png";
import Dictionary from "./Dictionary";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header mt-5">
          <img src={dictionary} className="dictionary-icon" alt="logo" />
        </header>

        <main>
          <Dictionary defaultKeyword="peace" />
        </main>

        <footer>
          This project was coded by Nadie Ivanitska and is{" "}
          <a
            href="https://github.com/NadieIvi/dictionary-project"
            target="_blank"
            rel="noreferrer"
            className="project-links"
          >
            open-soursed on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://moonlit-mousse-9a24f0.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="project-links"
          >
            hosted on Netlify
          </a>
          <br />
          <a
            href="https://www.flaticon.com/free-icons/dictionary"
            target="_blank"
            rel="noopener noreferrer"
            className="dictionary-link"
          >
            Dictionary icon created by Freepik - Flaticon
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
