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

const Home = () => (
  <div>
    <StyledChatContainer>
      <StyledMessageContainer>
        <StyledMessage type="sent">Oi</StyledMessage>

        <StyledMessage type="received">
          Você entrou em contato com o PortoHelp,
          o mais novo serviço de atendimento ao cliente
          da Porto Seguro.
          Vou precisar do CPF do proprietário do veículo!
        </StyledMessage>

        <StyledMessage type="sent">XXX.XXX.XXX-XX</StyledMessage>

        <StyledMessage type="received">
          Certo, encontrei o cadastro do seu veiculo!
          - Trator
        </StyledMessage>

        <StyledMessage type="received">
          Para melhorar a assertividade, precisamos de mais algumas informações. O veículo possui eixos?
        </StyledMessage>

        <OptionButton onClick={() => console.log("Opção 1 selecionada")}>Dois eixos</OptionButton>
        <OptionButton onClick={() => console.log("Opção 2 selecionada")}>Três eixos</OptionButton>
        <OptionButton onClick={() => console.log("Opção 2 selecionada")}>Quatro eixos ou mais</OptionButton>
        <OptionButton onClick={() => console.log("Opção 2 selecionada")}>Não possui eixos</OptionButton>


        <StyledMessage type="received">
          Você escolheu a opção: Dois eixos.
          O veículo
          está com alguma carga?
          (Responda
          apenas com Sim ou Não)
        </StyledMessage>

        <StyledMessage type="sent">Sim</StyledMessage>

        <StyledMessage type="received">
          Poderia informar o peso aproximado?
        </StyledMessage>

        <StyledMessage type="sent">5 toneladas</StyledMessage>

        <StyledMessage type="received">
          Gostaria de enviar fotos para que possam passar por nosso reconhecimento de imagem, assim aumentando a assertividade do modal?
        </StyledMessage>

        <OptionButton onClick={() => console.log("Opção 1 selecionada")}>Sim
          (uma aba se abrirá)</OptionButton>
        <OptionButton onClick={() => console.log("Opção 2 selecionada")}>Não </OptionButton>


        <StyledMessage type="received">
          Obrigada pelo envio!
          Por favor, digite o endereço ou envie
          a localização onde o veículo está
          parado!
        </StyledMessage>

        <StyledMessage type="sent">IMAGEM</StyledMessage>

        <StyledMessage type="received">
          Por favor, informe um ponto de referêcia! Se não houver, digite
        </StyledMessage>

        <StyledMessage type="sent">Não tem.</StyledMessage>

        <StyledMessage type="received">
          Por favor, digite o endereço
          completo! Digite assim:
          Rua (avenida ou rodovia), número,
          cidade, estado
        </StyledMessage>

        <StyledMessage type="sent">Rua ######, numero ###,
          São Paulo, SP.</StyledMessage>

        <StyledMessage type="received">
          Você precisa de um táxi para deixar o
          local? (Digite apenas Sim ou Não)
        </StyledMessage>

        <StyledMessage type="sent">Sim</StyledMessage>

        <StyledMessage type="received">
          Você está no mesmo local do
          veículo?
        </StyledMessage>



        <StyledMessage type="sent">Sim</StyledMessage>

        <StyledMessage type="received">
          Certo! Confira o resumo da sua
          solicitação:
          Serviço: Guincho para veículos
          pesados
          Localização: Rua xxxxx, xxx, São
          Paulo, SP
          Ponto de Referência: Não tem
          Endereço de destino: Rua
          ######, numero ###, São Paulo,
          SP
        </StyledMessage>

        <StyledMessage type="sent">Sim</StyledMessage>



        <StyledMessage type="received">
          Por favor, aguarde enquanto
          solicito o serviço!
        </StyledMessage>

        <StyledMessage type="received">
          Sua ajuda em breve estará a caminho!
          Assim que estiver tudo pronto,
          enviaremos o link!
        </StyledMessage>

        <StyledMessage type="received">
          Aqui está o seu número de
          protocolo: #12345678910110
        </StyledMessage>

        <StyledMessage type="received">
          Sua ajuda foi solicitada e seu
          guincho chegará em:
          Aproximadamente 40 minutos.
        </StyledMessage>
        <StyledMessage type="received">
          Aqui está seu(s) link(s) de rastreio:
          link
          Obrigada por usar nossos serviços!
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
