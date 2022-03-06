import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  height: fit-content;
  background-color: #290742;
  padding: 65px 135px;

  border-bottom: 6px solid var(--green) ;

  gap: 4rem;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: var(--white) ;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;

  .logo {
      height: 2.1rem;
    }
  
  li {
    display: inline;
    margin-right: 32px;
    font-size: var(--big);
  }

  .inputGroup {
    display: flex;
    flex-direction: row;
    height: 3rem;
    width: 20rem;
  }

  input {
    height: 100%;
    width: 80%;
    color: var(--white);
    font-size: var(--medium);
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    background: var(--dark-bg);
    
    border: none;
    border-radius: 4px 0px 0px 4px;

    padding: 1rem;

    ::-webkit-input-placeholder { 
      color: var(--light-purple);
    }

    input:-moz-placeholder {
      color: var(--light-purple);
    }
  }

  button {
    height: 100%;
    width: 20%;
    border: none;
    border-radius: 0px 4px 4px 0px;
    background-color: var(--button-bg);
    color: var(--white);
    align-items: center ;
    padding-top: 0.2rem;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: start;
  padding-right: 3rem;
  padding-bottom: 3rem;
  
  h1 {
    color: var(--button-bg);
    font-family: 'Poppins', sans-serif;
    font-size: 2.2rem;
    line-height: 3.4rem;
  }

  p {
    color: var(--light-purple);
    font-size: var(--bug);
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.5rem;
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: var(--tiny);
    width: fit-content;

    color: var(--button-bg);
    background-color: transparent;
    font-family: 'Poppins', sans-serif;
    border: none;
  }
`;

export const HeaderContentImage = styled.div`
  display: flex;
  flex-direction: column;
  
  img {
    max-width: 35rem;
  }
`;