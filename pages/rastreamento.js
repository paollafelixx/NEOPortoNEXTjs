// Rastreamento.js
import React, { useState } from 'react';
import Link from 'next/link';
import {
  StyledChatContainer,
  StyledMessageContainer,
  StyledMessage,
  Button,
  StyledBackButton,
} from '../styles/styles';

const Rastreamento = () => {
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);

  const toggleAdditionalInfo = () => {
    setShowAdditionalInfo(!showAdditionalInfo);
  };

  return (
    <div>
      <StyledChatContainer>
        <Link href="/">
          <StyledBackButton>Voltar para o chat</StyledBackButton>
        </Link>
        <StyledMessageContainer>

          <StyledMessage type="received">
            <p>Nome do Motorista: John Doe</p>
            <p>Endereço: Av. Fortunata Tadielli Natucci, 1156,
              Estr. de Perus - São Paulo, SP</p>
            <p>Tipo de Guincho: Plano Ouro</p>

          </StyledMessage>

          <StyledMessage type="received">
            <Button onClick={toggleAdditionalInfo}>
              {showAdditionalInfo ? 'Ocultar Detalhes' : 'Mostrar Detalhes'}
            </Button>
          </StyledMessage>

          {showAdditionalInfo && (
            <StyledMessage type="received">
              <p>Local: São Paulo, SP</p>
              <p>Modelo do veiculo: Volvo FH 540</p>
              <p>Placa: CLA1939</p>
              <p>Táxi: Não</p>
              <p>Número de protocolo: 63587654156</p>

            </StyledMessage>
          )}
        </StyledMessageContainer>
      </StyledChatContainer>
    </div>
  );
};

export default Rastreamento;
