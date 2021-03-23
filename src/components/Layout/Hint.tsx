import React, { useState } from "react";
import styled from "styled-components";
interface Props {
  hint: string;
}
const StyledHint = styled.div`
  background-color: rgba(0, 0, 0, 0.35);
  min-width: 10rem;
  max-width: 50%;
  padding: 1.1rem;
  /* font-size: 1.5rem; */
  color: white;
  text-align: center;
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 2.4rem;
  transition: all 0.6s;
`;
const Text = styled.p`
  font-size: 1.7rem;
  color: white;
  font-weight: 400;
`;
const TextSmall = styled.p`
  font-size: 1.7rem;
  font-weight: 300;
  transition: all 0.6s;
`;
const Hint = ({ hint }: Props) => {
  const [show, setShow] = useState(false);
  const toggleHint = () => setShow(!show);
  return (
    <StyledHint onClick={toggleHint}>
      <Text>hint!</Text>
      {show ? <TextSmall>{hint}</TextSmall> : null}
    </StyledHint>
  );
};
export default Hint;
