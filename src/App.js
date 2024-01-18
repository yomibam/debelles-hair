import "./App.css";
import Accessories from "./components/Accessories";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Pricing from "./components/Pricing";
import Products from "./components/Products";
import Services from "./components/Services";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Accessories />
      <Products />
      <Services />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
