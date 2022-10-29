import "./Home.css";
import Btnstrip from "../components/BtnsHome";

export default function Home() {
  return (
    <div className="home">
      <div className="titles">
        <h1 className="title">Créé ton propre carnet de voyage</h1>
        <h2 className="little-title">
          Fais naître le voyage de tes rêves ! <br />
          Bâtis une expérience inoubliable
        </h2>
        <div className="voyage" />
      </div>
      <Btnstrip />
    </div>
  );
}
