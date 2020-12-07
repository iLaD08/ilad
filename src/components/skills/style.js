import styled from "styled-components";

export const SkillsContainer = styled.div`
    margin-top: 4%;
    margin-left: 4%;
    margin-bottom: 8%;
    margin-right: 4%;
`;

export const SkillsDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    text-align: center;
`;

export const SkillDiv = styled.div`
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
`;

export const Skilltxt = styled.h3`
    color: #333333;
`;


