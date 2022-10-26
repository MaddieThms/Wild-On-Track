import Home from "./pages/Home";
import MesCarnets from "./pages/MesCarnets";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FlightPage from "./pages/FlightPage";
import MesHotels from "./pages/MesHotels";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <MesCarnets />
      <FlightPage />
      <MesHotels />
      <Footer />
    </div>
  );
}

export default App;
