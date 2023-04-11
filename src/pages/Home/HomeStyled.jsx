import styled from "styled-components";

export const HomeBody = styled.section`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin: 1rem auto;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
