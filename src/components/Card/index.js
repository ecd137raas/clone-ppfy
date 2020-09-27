import React from 'react';

import { Container, Label } from './styles';

function Card() {
  return (
    <Container>
      <header>
        <Label color="#7159c1" />
      </header>
      <p>Realizar migração de servidores</p>
      <img src="https://api.adorable.io/avatars/285/abott@adorable.png" alt=""></img>
    </Container>
  );
}

export default Card;