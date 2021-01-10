import styled from "styled-components";
import ReCAPTCHA from "react-google-recaptcha";

export const ContactPageDivContainer = styled.div`
    position: relative;
    top: 150px;
    text-align: center;
    @media (max-width: 768px) {
        position: relative;
        top: 210px;
    }
`;

export const ContactPageInput = styled.input`
    font-size: 25px;
    border: solid black 1px;
    outline: none;
    padding-left: 4px;
    margin: 5px;
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