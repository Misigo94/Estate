// import logo from "./logo.svg";
import "./App.css";
import Customers from "./Components/Customers";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Mail from "./Components/Mail";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Properties from "./Components/Properties";
import Search from "./Components/Search";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Search />
      <Products />
      <Properties />
      <Customers />
      <Mail />
      <Footer />
    </div>
  );
}

export default App;
