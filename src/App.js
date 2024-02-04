import './App.css';
import { ContactUs } from './components/contactus/ContactUs';
import { Footer } from './components/footer/Footer';
import { PricingPlans } from './components/PricingPlans/PracingPlan';
import { WhoChooseUs } from './components/WhoChooseUs/WhoChooseUs';

function App() {
  return (
    <>

    <div className="app">
    <PricingPlans />
      <WhoChooseUs />
    <ContactUs />
    
    <Footer />
    </div>
    
    </>
  );
}

export default App;
