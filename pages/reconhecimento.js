import React from 'react';
import Link from 'next/link';

import {
  StyledChatContainer,
  StyledMessageContainer,
  StyledInputContainer,
  Input,
  Button,
  StyledMessage,
  OptionButton,
} from '../styles/styles';

const Reconhecimento = () => (
  <div>
    <StyledChatContainer>
      <StyledMessageContainer>
        <StyledMessage type="sent">Olá</StyledMessage>

        <StyledMessage type="received">
          Aqui está seu link de rastreio: <Link href="/rastreamento">Rastrear Veículo </Link>
          Obrigade por usar nossos serviços!
        </StyledMessage>

      </StyledMessageContainer>

      <StyledInputContainer>
        <Input type="text" placeholder="Digite sua mensagem..." />
        <Button>Enviar</Button>
      </StyledInputContainer>
    </StyledChatContainer>


  </div>
);

export default Reconhecimento;
