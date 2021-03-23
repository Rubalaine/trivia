import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Answer from "./Answer";

interface Props {
  rightAnswer: string;
  answers: string[];
  nextQuestion: () => void;
}
interface StyledProps {
  btnActive: boolean;
}
const StyledAnswers = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const ButtonConfirm = styled.button`
  background-color: #0a0a58;
  color: white;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1.5rem;
  width: 15rem;
  outline: none;
  border: none;
  text-align: center;
  align-self: center;
  border-radius: 40px;
  opacity: ${({ btnActive }: StyledProps) => (btnActive ? "1" : "0.3")};
  cursor: pointer;
  transition: all 0.4s;
`;
const Answers = ({ rightAnswer, answers, nextQuestion }: Props) => {
  const [btnActive, setBtnActive] = useState(false);
  const [selected, setSelected] = useState({ answer: "" });
  useEffect(() => {
    if (selected.answer !== " ") {
      setBtnActive(true);
    } else setBtnActive(false);
  }, [selected]);
  const changed = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected({ answer: event.target.value });
  };
  const handleVerify = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (btnActive)
      if (selected.answer === rightAnswer) {
        nextQuestion();
        console.log("clicked on verify option");
      } else console.log("errou");
  };
  const answersList = answers.map((item) => (
    <Answer answer={item} changed={changed} selected={selected} key={item} />
  ));
  return (
    <StyledAnswers onSubmit={handleVerify}>
      {answersList}
      <ButtonConfirm btnActive={btnActive}>confirmar</ButtonConfirm>
    </StyledAnswers>
  );
};

export default Answers;
