import "./App.css";
import { PricingPlans } from "./components/PricingPlans";
import { WhyChooseUs } from "./components/WhyChooseUs/WhyChooseUs";
import { ContactUs } from "./components/contactus/ContactUs";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Services } from "./components/services/Services";


function App() {
  return (
    <>
      <Header />
      <div className="app">
        <Services />
        <PricingPlans />
        <WhyChooseUs/>
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}

export default App;
