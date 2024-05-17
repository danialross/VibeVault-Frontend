import HomePage from "./pages/HomePage";
import Intro from "./components/Intro";
import { useState } from "react";

function App() {
  const [isIntroAnimationEnd, setIsIntroAnimationEnd] = useState(false);

  const handleAnimationEnd = () => {
    setIsIntroAnimationEnd(true);
  };
  return (
    <div className="bg-dark-violet">
      {!isIntroAnimationEnd && (
        <Intro handleAnimationEnd={handleAnimationEnd} />
      )}
      {isIntroAnimationEnd && (
        <div className="animate-appear">
          <HomePage />
        </div>
      )}
    </div>
  );
}

export default App;
