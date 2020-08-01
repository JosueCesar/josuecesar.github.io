import styled from 'styled-components';

export const NameContainer = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  width: 80%;
  margin: 0 10% 0 10%;
  padding-top: 80px;
`;

export const ImageContainer = styled.div`
  max-width: 1000px;
  width: 90%;

  img {
    width: 100%;
  }
`;

export const Name = styled.div`
  padding: 40px;

  h1 {
    font-size: 100px;
    line-height: 85px;
    font-family: 'Roboto', sans-serif;
  }

  h2 {
    margin-top: 30px;
  }
`;
