import './App.css';
import { Header } from './components/header/Header';
import UpsTeam from './components/upsteam/UpsTeam';
import { Services } from './components/services/Services';
import { PricingPlans } from './components/PricingPlans';
import { WhoChooseUs } from './components/WhoChooseUs';

function App() {
  return (
    <>
      <Header />

    <div className="app">
      <UpsTeam />
      <Services />
      <PricingPlans />
      <WhoChooseUs />
    </div>
    </>
  );
}

export default App;
