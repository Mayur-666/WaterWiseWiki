import "./App.css";
import Features from "./components/designs/Features";
import Waves from "./components/designs/Waves";
import Navbar from "./components/header/Navbar";
import RealTimeAlerts from "./components/header/RealTimeAlerts";

function App() {
  return (
    <div className="app">
      <Navbar />
      <RealTimeAlerts />
      <div className="translate-y-32 w-full flex flex-col items-center">
        <div style={{ height: "84vh"}}>
          <h1 className="font-bold text-6xl p-5 w-fit mx-auto my-5 main-text">EVERY DROP COUNTS</h1>
        </div>
        <Features />
      </div>
      <Waves />
    </div>
  );
}


export default App;
