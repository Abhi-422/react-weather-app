import logo from './logo512.png';
import './App.css';
import Weather from './Components/Weather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://pbs.twimg.com/profile_images/1348966766660050945/SuIwfWVm_400x400.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Name is Abhishek
        </a>
        <Weather/>
      </header>
    </div>
  );
}

export default App;
