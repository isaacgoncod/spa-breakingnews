import styled from "styled-components";

export const CardContainer = styled.section`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: #0000003d 0px 3px 8px;
  border-radius: 0.3rem;
  padding: 2rem;
`;

export const CardBody = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  h2 {
    margin-bottom: 1rem;
  }

  img {
    width: 30%;
    object-fit: cover;
    object-position: center;
  }

  @media (max-width: 800px) {
    flex-direction: column-reverse;

    img {
      width: 80%;
    }
  }
`;

export const CardFooter = styled.article`
  display: flex;
  align-items: center;
  gap: 1rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }
`;
