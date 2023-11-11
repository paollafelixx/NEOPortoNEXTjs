import React from 'react';
import {
  StyledNavbar,
  Link,
  StyledChatContainer,
  StyledMessageContainer,
  StyledInputContainer,
  Input,
  Button,
  StyledMessage,
} from '../styles/styles.js';

const Home = () => (
  <div>
    <StyledNavbar>
      <Link href="/">Home</Link>
      <Link href="/about">Sobre</Link>
    </StyledNavbar>

    <StyledChatContainer>
      <StyledMessageContainer>
        <StyledMessage type="sent">Olá</StyledMessage>
        <StyledMessage type="received">Você entrou em contato...</StyledMessage>
      </StyledMessageContainer>

      <StyledInputContainer>
        <Input type="text" placeholder="Digite sua mensagem..." />
        <Button>Enviar</Button>
      </StyledInputContainer>
    </StyledChatContainer>
  </div>
);

export default Home;
