import React, { useState } from 'react';
import Link from 'next/link';
import {
  StyledChatContainer,
  StyledInfoContainer,
  StyledMessageContainer,
  StyledMessage,
  Button,
  StyledIcon,
  StyledBackButton, // Adicione esta linha para importar o botão de volta
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
            <StyledBackButton>←</StyledBackButton>
            </Link>
        <StyledMessageContainer>

          <StyledMessage type="received">
            <StyledIcon>👤</StyledIcon>
            <p>Diogo Mendes Moreira</p>
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
