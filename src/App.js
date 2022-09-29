import "./App.css";
import { EventPage } from "./Components/Eventpage/EventPage";
import { LandingPage } from "./Components/Landingpage/LandingPage";
import { EventForm } from "./Components/Form/EventForm";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <EventPage />
      {/* <EventForm /> */}
    </div>
  );
}

export default App;
