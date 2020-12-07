import styled from "styled-components";

export const ProjectContainer = styled.div`
    box-shadow: 0px 1px 10px 0px rgba(94, 91, 91, 0.13);
    transition: transform 0.5s;
    width: 450px;
    height: 200px;
    cursor: pointer;
    margin: 1%;
    padding: 3%;
    &:hover {
        box-shadow: 0px 11px 16px 0px rgba(5, 5, 5, 0.23);
        transform: scale(1.02);
    }
`;

export const ProjectContent = styled.div``;

export const ProjectName = styled.h3``;
 
export const ProjectDescription = styled.p`
    position: relative;
    top: 20px;
    color: #808080;
`;
