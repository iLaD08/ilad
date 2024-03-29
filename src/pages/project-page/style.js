import styled, { keyframes } from "styled-components";

const onLoadAnimation = keyframes`
  0% {
    transform: translateY(-10%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const ProjectsContainer = styled.div`
  margin-top: 40px;
  animation: 1s ease-out 0s 1 ${onLoadAnimation};
`;

export const ProjectsDiv = styled.div`
  width: 85vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  margin: 50px auto;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectsTitle = styled.h1`
  text-align: center;
`;

export const ProjectsTitleUnderline = styled.span`
  background-color: #3d3d3d;
  width: 70px;
  height: 5px;
  display: block;
  margin: 5px auto;
`;
