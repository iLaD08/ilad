import styled, { keyframes } from "styled-components";
import ReCAPTCHA from "react-google-recaptcha";

const onLoadAnimation = keyframes`
  0% {
    transform: translateX(-10%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const ContactPageDivContainer = styled.div`
    position: relative;
    top: 150px;
    text-align: center;
    animation: 1s ease-out 0s 1 ${onLoadAnimation};
    @media (max-width: 768px) {
        position: relative;
        top: 210px;
    }
`;

export const ContactTitle = styled.h1`
    position: relative;
    top: -50px;
    text-align: center;
`;

export const ConctactTitleUnderline = styled.span`
    position: relative;
    top: -50px;
    background-color: #3d3d3d;
    width: 70px;
    height: 5px;
    display: block;
    margin: 5px auto;
`;

export const ContactPageInput = styled.input`
    font-size: 25px;
    border: solid black 1px;
    outline: none;
    padding-left: 4px;
    margin: 5px;
    @media (max-width: 768px) {
        width: 80%;
    }
}
`;

export const ContactPageMessage = styled.textarea`
    font-size: 25px;
    border: solid black 1px;
    outline: none;
    width: 316px; 
    height: 165px;
    padding-left: 4px;
    margin: 5px;
    overflow: hidden;
    @media (max-width: 768px) {
        width: 80%;
    }
`;

export const ContactCaptcha = styled(ReCAPTCHA)`
    display: flex;
    justify-content: center;
    margin: 10px;
`;

export const ContactSpan = styled.span`
    margin: 10px;
    color: red;
`;

export const MessageSentAlert = styled.h1`
    position: relative;
    top: 100px;
`;