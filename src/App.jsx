import Navbar from "./assets/layout/general/navbar/Navbar";
import "./App.scss";
import HomePage from "./assets/pages/HomePage";

function App() {
  return (
    <div className="mainBg">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
