import './App.css';
import { ContactUs } from './components/contactus/ContactUs';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Services } from './components/services/Services';
import { PricingPlans } from './components/PricingPlans';
import { WhoChooseUs } from './components/WhoChooseUs';

function App() {
  return (
    <>
    <Header />
    <div className="app">
    <Services />
      <PricingPlans />
      <WhoChooseUs />
      <Services />
    <ContactUs />
    <Footer />

    </div>
    
    </>
  );
}

export default App;
