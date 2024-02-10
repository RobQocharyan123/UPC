import "./App.css";
import { ContactUs } from "./components/contactus/ContactUs";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Services } from './components/services/Services';
import { PricingPlans } from './components/PricingPlans/index';
import { WhyChooseUs } from './components/WhyChooseUs/WhyChooseUs';


function App() {
  return (
    <>
      <Header />
      <div className="app">
        <Services />
        <PricingPlans />
        <WhyChooseUs />
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}

export default App;
