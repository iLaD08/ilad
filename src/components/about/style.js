import styled, { keyframes } from "styled-components";

const onLoadAnimation = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const AboutContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: grey;
    font-size: 30px;
    padding: 4%;
    position: relative;
    top: 20px;
    animation: 1s ease-out 0s 1 ${onLoadAnimation};
    @media (max-width: 768px) {
        position: relative;
        top: 170px;
        font-size: 18px;
    }
`;

export const AboutDiv = styled.div``;

export const AboutContentDiv = styled.div``;

export const AboutTextTyperDiv = styled.div``;

export const AboutImg = styled.img`
    width: 450px;
    height: 450px;
    @media (max-width: 768px) {
        display: none;
    }
`;

export const AboutH2 = styled.h2`
    margin-top: 4%;
`;

export const AboutP = styled.p`
    margin-top: 2%;
`;

export const AboutButton = styled.button`
    margin-top: 2%;
`;

