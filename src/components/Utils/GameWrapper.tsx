import React from "react";
import styled from "styled-components";
import background from "./../../assets/background1.png";
interface Props {
  children: React.ReactNode;
}
const Wrapper = styled.div`
  position: relative;
  font-size: 1.6rem;
  height: 100vh;
  max-width: 430px;
  margin: 0 auto;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  padding: 1.6rem;
`;
const GameWrapper = ({ children }: Props) => <Wrapper>{children}</Wrapper>;

export default GameWrapper;
