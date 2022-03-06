import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  img {
    max-width: 35rem ;
  }

  span {
    font-size: 1rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: black;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    color: var(--purple-bg);
    line-height: 2rem;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: black;
    line-height: 1.5rem;
  }
`;