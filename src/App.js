import { useState } from "react";
import "./App.css";
import QuoteBox from "./components/QuoteBox";
import getRandomColor from "./functions/getRandomColor";

function App() {
  const [bgColor, setBgColor] = useState(getRandomColor);

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <QuoteBox color={bgColor} setBgColor={setBgColor} />
    </div>
  );
}

export default App;
