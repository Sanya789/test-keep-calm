import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Main />
        <footer className="footer footer">
          <p className="footer__text"> © TEST, 1022–2022</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
