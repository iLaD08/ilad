import styled from "styled-components";
import { ReactComponent as Image1 } from "../../assests/error.svg";

export const ErrorDivContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
`;

export const ErrorDivContentContainer = styled.div`
  margin: 10%;
`;

export const ErrorDivH1 = styled.h1`
  font-size: 100px;
  text-transform: uppercase;
`;

export const ErrorDivP = styled.p`
  color: #a7a7a7;
  font-size: 20px;
`;

export const ErrorImg = styled(Image1)`
  position: relative;
  top: 15px;
  right: 40px;
  width: 650px;
  height: 650px;
`;
