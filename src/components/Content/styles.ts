import styled from "styled-components";

export const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  padding: 4rem 7rem;
`;

export const ContentTop = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6rem;
`;


export const Column = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 36rem ;
  gap: 1.5rem;

  hr {
    /* color: #F2E7FA; */
    height: 1px;
    border: 1px solid #F2E7FA;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;

  img {
    width: 23rem;
  }
`;