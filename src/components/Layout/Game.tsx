import React, { useEffect } from "react";
import styled from "styled-components";
import { useQuestions } from "../../context/QuestionContext";
import shuffleArray from "../Utils/shuffleArray";
import GameCard, {
  ProgressText,
  Title,
  StyledCategory,
} from "../Utils/GameCard";
import Hint from "./Hint";
import Spacer from "../Utils/Spacer";
import Answers from "./Answers";
const GameSpace = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;
const Game = () => {
  const { questions, setQuestions } = useQuestions() as ContextType;
  useEffect(() => {
    shuffleArray(questions.questions);
    setQuestions({ ...questions, actualQuestion: questions.questions[0] });
    // eslint-disable-next-line
  }, []);
  const handleNextQuestion = () => {
    let questionNumber = questions.questionNumber;
    console.log("question numer", questionNumber);
    setQuestions({
      ...questions,
      actualQuestion: questions.questions[questionNumber + 1],
      questionNumber: questionNumber + 1,
    });
    // console.log(questionNumber, question);
  };
  return (
    <GameSpace>
      <GameCard>
        <ProgressText>{questions.questionNumber + 1}</ProgressText>
        <Spacer size={2.5} />
        <Title>12s</Title>
        <StyledCategory>{questions.actualQuestion.category}</StyledCategory>
        <Title>{questions.actualQuestion.question}</Title>
        <Answers
          answers={questions.actualQuestion.answers}
          rightAnswer={questions.actualQuestion.rightAnswer}
          nextQuestion={handleNextQuestion}
        />
      </GameCard>
      <Hint hint={questions.actualQuestion.hint} />
    </GameSpace>
  );
};

export default Game;
