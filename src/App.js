import './App.css';
import { ContactUs } from './components/contactus/ContactUs';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { PricingPlan } from './components/PricingPlans/PracingPlan';
import { Services } from './components/services/Services';
import { WhoChooseUs } from './components/WhoChooseUs/WhoChooseUs';

function App() {
  return (
    <>
    <Header />
    <div className="app">
        <Services />
        <PricingPlan />
        <WhoChooseUs />
        <ContactUs />
    </div>
    <Footer />
    </>
  );
}

export default App;
