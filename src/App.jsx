import "./App.css";
import { MainWindow } from "./components/MainWindow";
import { NavButtons } from "./components/NavButtons";
import { Sides } from "./components/Sides";
import { TicketDisplay } from "./components/TicketDisplay";

function App() {
  return (
    <div className="app-container">
      <div className="ticket-display-container">
        <TicketDisplay />
      </div>
      <div className="make-better-name-later">
        <div className="main-window-container">
          <MainWindow />
        </div>
        <div className="sides-container">
          <Sides />
        </div>
        <div className="nav-buttons-container">
          <NavButtons />
        </div>
      </div>
    </div>
  );
}

export default App;
