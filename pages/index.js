import React from 'react';
import Link from 'next/link';
import {
  StyledChatContainer,
  StyledMessageContainer,
  StyledInputContainer,
  Input,
  Button,
  StyledMessage,
} from '../styles/styles';

const Home = () => (
  <div>
    <StyledChatContainer>
      <StyledMessageContainer>
        <StyledMessage type="sent">Oi</StyledMessage>
        <StyledMessage type="received">
          <Link href="/rastreamento">Rastrear Veículo</Link>
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
