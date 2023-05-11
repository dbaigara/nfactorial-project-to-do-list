import "./App.css";
import { useState } from "react";
import HEADER from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";

function App() {

const [toDO, setToDo] = useState("");
const [mainContent, setMainContent] = useState("");
const [footer, setFooter] = useState("");

  return (
    <div className="container mt-5">
      <div className="mb-5">
        <HEADER />
      </div>
      <div className="mb-5 mt-5 pt-5">
        <MainContent />
      </div>
      <div className="pt-5">
        <Footer />
      </div>
    </div>
  );
}

export default App;
