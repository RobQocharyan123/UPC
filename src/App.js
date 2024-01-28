import './App.css';
import { Header } from './components/header/Header';
import UpsTeam from './components/upsteam/UpsTeam';
import { Services } from './components/services/Services';

function App() {
  return (
    <>
      <Header />

    <div className="app">
      <UpsTeam />
      <Services />
    </div>
    </>
  );
}

export default App;
