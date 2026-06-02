
import { useState } from "react";
import IntroVideo from "./components/IntroVideo";
import WeddingHome from "./pages/WeddingHome";

function App() {
  const [phase, setPhase] = useState("intro");

  return (
    <>
      {phase !== "wedding" ? (
        <IntroVideo
          phase={phase}
          setPhase={setPhase}
        />
      ) : (
        <WeddingHome />
      )}
    </>
  );
}

export default App;

