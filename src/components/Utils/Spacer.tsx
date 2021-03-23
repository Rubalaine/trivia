import React from "react";
import styled from "styled-components";
interface Props {
  size?: number | undefined;
}
const Space = styled.span`
  display: block;
  margin-bottom: ${({ size }: Props) => size || 1}rem;
`;
const Spacer = ({ size }: Props) => <Space size={size} />;

export default Spacer;
