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
  const [estimatedArrival, setEstimatedArrival] = useState(generateEstimatedArrival());

  const toggleAdditionalInfo = () => {
    setShowAdditionalInfo(!showAdditionalInfo);
  };

  function generateEstimatedArrival() {
    const now = new Date();
    const hours = now.getHours() + 2;
    const minutes = now.getMinutes();

    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
  }

  return (
    <div>
      <StyledChatContainer>
        <Link href="/">
          <StyledBackButton>Voltar para o chat</StyledBackButton>
        </Link>

        <StyledMessageContainer>

          {/* Exibir previsão de horário */}
          <StyledMessage type="received">Previsão de Chegada: {estimatedArrival}</StyledMessage>

          <StyledMessage type="received">
            <p>Atendente: John Doe</p>
            <p>Endereço: Av. Paulista, 1106 - 7º andar - Bela Vista, São Paulo - SP, 01311-000, Brasil</p>
            <p>Tipo de Guincho: Guincho para veículos pesados</p>
          </StyledMessage>

          <StyledMessage type="received">
            <Button onClick={toggleAdditionalInfo}>
              {showAdditionalInfo ? 'Ocultar Detalhes' : 'Mostrar Detalhes'}
            </Button>
          </StyledMessage>

          {showAdditionalInfo && (
            <StyledMessage type="received">
              <p>Local: São Paulo, SP</p>
              <p>Modelo do veículo: Volvo FH 540</p>
              <p>Placa: CLA1939</p>
              <p>Táxi: Não</p>
              <p>Número de protocolo: #12345678910110</p>
            </StyledMessage>
          )}
        </StyledMessageContainer>
      </StyledChatContainer>
    </div>
  );
};

export default Rastreamento;
