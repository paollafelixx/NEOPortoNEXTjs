// pages/index.js
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
} from '../styles/styles';
import Rastreamento from './rastreamento.js';

const Home = () => (
  <div>
    <StyledChatContainer>
      <StyledMessageContainer>
        <StyledMessage type="sent">Oi</StyledMessage>
        <StyledMessage type="received">
          <Link href="/rastreamento">Link rastreamento</Link>
        </StyledMessage>
      </StyledMessageContainer>

      <StyledInputContainer>
        <Input type="text" placeholder="Digite sua mensagem..." />
        <Button>Enviar</Button>
      </StyledInputContainer>
    </StyledChatContainer>
  </div>
);

export default Home;
