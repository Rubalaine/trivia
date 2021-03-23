import React from "react";
import styled from "styled-components";
const Card = styled.div`
  position: relative;
  width: 100%;
  z-index: 69;
  background: white;
  min-height: 50rem;
  max-width: 85%;
  margin: 0 auto;
  border-radius: 2.6rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: animateStack 1s;
  
  &::after {
    content: "";
    z-index: -1;
    position: absolute;
    top: 2rem;
    left: auto;
    height: 100%;
    border-radius: 2.6rem;

    width: 93%;
    background: white;
    opacity: 0.7;
    animation: animateStack 1.1s;
  }
  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 4rem;
    left: auto;
    height: 100%;
    border-radius: 2.6rem;

    width: 84%;
    background: white;
    opacity: 0.5;
    animation: animateStack 1.05s;
  }
`;
export const ProgressText = styled.p`
  font-size: 1.6rem;
  align-self: flex-start;
  font-weight: 400;
`;
export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
`;
export const StyledCategory = styled.p`
  font-size: 1.6rem;
  font-weight: 300;
  text-align: center;
  margin-bottom: 1.5rem;
`;
const GameCard = ({ children }: { children: React.ReactNode }) => (
  <Card>{children}</Card>
);

export default GameCard;
