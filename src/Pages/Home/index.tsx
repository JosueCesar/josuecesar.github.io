import React from 'react';

import developer from '../../assets/developer.svg';
import { ImageContainer, NameContainer, Name } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <NameContainer>
        <ImageContainer>
          <img src={developer} alt="developer" />
        </ImageContainer>
        <Name>
          <h1>Josué<br />Cesar</h1>
          <h2>Web, Mobile and Backend Developer.</h2>
        </Name>
      </NameContainer>
    </>
  );
}

export default Home;
