import React from "react";
import Game from "./components/Layout/Game";
import GameWrapper from "./components/Utils/GameWrapper";
import { QuestionProvider } from "./context/QuestionContext";

const App = () => {
  return (
    <QuestionProvider>
      <GameWrapper>
        <Game />
      </GameWrapper>
    </QuestionProvider>
  );
};
export default App;
