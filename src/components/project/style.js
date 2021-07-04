import styled from "styled-components";

export const ProjectContainer = styled.div`
  box-shadow: 0px 1px 10px 0px rgba(94, 91, 91, 0.13);
  transition: transform 0.5s;
  width: 450px;
  height: 200px;
  cursor: pointer;
  margin: 0% 2% 3% 2%;
  padding: 20px;

  &:hover {
    box-shadow: 0px 11px 16px 0px rgba(5, 5, 5, 0.23);
    transform: scale(1.02);
  }

  .links {
    font-family: "Roboto", sans-serif;
    display: flex;
    justify-content: flex-start;
    margin-top: 50px;

    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      margin-right: 8px;

      svg {
        margin-right: 2px;
      }
    }

    a:first-child {
      svg {
        transform: rotate(120deg);
      }
    }

    .link {
      color: red;
    }

    .github {
      color: blue;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ProjectContent = styled.div``;

export const ProjectName = styled.h3``;

export const ProjectDescription = styled.p`
  position: relative;
  top: 20px;
  color: #808080;
`;
