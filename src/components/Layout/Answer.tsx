import React from "react";
import styled from "styled-components";

interface Props {
  answer: string;
  selected: { answer: string };
  changed: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Label = styled.label`
  width: 100%;
  padding: 1.5rem;
  border: solid 1px #afaeae;
  text-align: center;
  border-radius: 10rem;
  margin-bottom: 3rem;
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 400;
  transition: all 0.4s;
`;
const Input = styled.input`
  display: none;
  &:checked + label {
    background-color: #00acfc;
    color: white;
  }
`;

const Answer = ({ answer, selected, changed }: Props) => {
  return (
    <>
      <Input
        type="radio"
        name="answers"
        id={answer}
        checked={selected.answer === answer}
        value={answer}
        onChange={changed}
      />
      <Label htmlFor={answer}>
        <span>{answer}</span>
      </Label>
    </>
  );
};

export default Answer;
