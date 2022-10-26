import "./App.css";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FlightPage from "./pages/FlightPage";

function App() {
  return (
    <div className="App">
      <Header />
      <FlightPage />
      <Footer />
    </div>
  );
}

export default App;
