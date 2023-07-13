import './App.css';
import Providers from './core/providers/Provider';
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="App">
      <Providers>
        <MainPage />
      </Providers>
    </div>
  );
}

export default App;
