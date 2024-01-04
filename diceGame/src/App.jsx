import StartGame from "./components/StartGame";
import { useState } from "react";
import PlayGame from "./components/PlayGame";

function App() {
  const [isGameStarted, setisGameStarted] = useState(false);

  const toggleGame = () => {
    setisGameStarted((prev) => (!prev)
    );
    console.log("buttonisclicked");
  };
  return (
    <>
      { 
      isGameStarted ? <PlayGame/>
       : <StartGame toggle={toggleGame}/>
      }
    </>
  );
}

export default App;
