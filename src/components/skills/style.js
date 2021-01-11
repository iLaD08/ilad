import styled from "styled-components";

export const SkillsContainer = styled.div`
    margin-top: 4%;
    margin-left: 4%;
    margin-bottom: 8%;
    margin-right: 4%;
    @media (max-width: 768px) {
        position: relative;
        top: 300px;
    }
`;

export const SkillsDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: space-between;
    }
`;

export const SkillDiv = styled.div`
    margin: 10px;
    :hover {
        transform: scale(1.05);
        transition: transform 0.5s;
    }
`;

export const SkillsTitle = styled.h1`
    text-align: center;
`;

export const SkillsUnderline = styled.span`
    background-color: #3d3d3d;
    width: 50px;
    height: 5px;
    display: block;
    margin: 5px auto;
`;

export const SkillImg = styled.img`
    width: 250px;
    height: 250px;
    @media (max-width: 768px) {
        width: 200px;
        height: 200px;
    }
`;

export const Skilltxt = styled.h3`
    color: #333333;
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;


