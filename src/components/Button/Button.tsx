import React, { ReactNode } from "react";
import styled from "styled-components";

const CustonButton = styled.button`
  background-color: #03ffff;
  width: 140px;
  height: 40px;
  border-radius: 50px;
  font-weight: bold;
`;

const Button = ({ children }: { children: ReactNode }) => {
  return <CustonButton>{children}</CustonButton>;
};

export default Button;
