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

          {/* Informações básicas */}
          <StyledMessage type="received">
            <p>Nome do Motorista: John Doe</p>
            <p>Número do Carro: ABC-1234</p>
            <p>Modelo do Carro: Sedan</p>
          </StyledMessage>

          {/* Botão para mostrar/ocultar informações adicionais */}
          <StyledMessage type="received">
            <Button onClick={toggleAdditionalInfo}>
              {showAdditionalInfo ? 'Ocultar Detalhes' : 'Mostrar Detalhes'}
            </Button>
          </StyledMessage>

          {/* Informações adicionais (exibidas quando showAdditionalInfo é true) */}
          {showAdditionalInfo && (
            <StyledMessage type="received">
              <p>Tipo de Guincho: Plano Ouro</p>
              <p>Local: São Paulo, SP</p>
              {/* Adicione mais informações conforme necessário */}
            </StyledMessage>
          )}
        </StyledMessageContainer>
      </StyledChatContainer>
    </div>
  );
};

export default Rastreamento;
