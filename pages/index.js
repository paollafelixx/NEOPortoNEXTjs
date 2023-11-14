import React from 'react';
import Link from 'next/link';
import Iframe from 'react-iframe';

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
        <StyledMessage type="sent">Olá</StyledMessage>

        <StyledMessage type="received">
          Você entrou em contato com a NEO Porto,
          Vou precisar do CPF do proprietário do veículo!
        </StyledMessage>

        <StyledMessage type="sent">596.922.470-74</StyledMessage>

        <StyledMessage type="received">
          Certo, encontrei o cadastro do seu veiculo (Trator)! Olá Renata!
        </StyledMessage>

        <StyledMessage type="received">
          Para melhorar a assertividade, precisamos de mais algumas informações. O veículo possui eixos?
        </StyledMessage>

        <OptionButton onClick={() => console.log("Opção 1 selecionada")}>2</OptionButton>
        <OptionButton onClick={() => console.log("Opção 2 selecionada")}>3</OptionButton>
        <OptionButton onClick={() => console.log("Opção 2 selecionada")}>4 ou mais</OptionButton>
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
          Poderia informar o peso aproximado em toneldas?
        </StyledMessage>

        <StyledMessage type="sent">5</StyledMessage>

        <StyledMessage type="received">
          Gostaria de enviar fotos para que possam passar por nosso reconhecimento de imagem, assim aumentando a assertividade do modal?
        </StyledMessage>

        <OptionButton onClick={() => console.log("Opção 1 selecionada")}>Sim
          (uma aba se abrirá)</OptionButton>
        <OptionButton onClick={() => console.log("Opção 2 selecionada")}>Não </OptionButton>

        <StyledMessage type="received">
          <Link href="/reconhecimento">Tutorial para envio de fotos</Link>
        </StyledMessage>

        <StyledMessage type="received">
          Obrigada pelo envio!
          Por favor, digite o endereço ou envie
          a localização onde o veículo está
          parado!
        </StyledMessage>

        <StyledMessage type="sent">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                src="https://maps.google.com/maps?q=fiap%20paulista&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                frameBorder="0"
                scrolling="no"
                style={{ width: '100%', height: '290px' }}
              ></iframe>
              <style>
                {`
                  .mapouter {
                    position: relative;
                    height: 290px;
                    width: 100%;
                    background: #fff;
                  }
                  .gmap_canvas {
                    overflow: hidden;
                    height: 290px;
                    width: 100%;
                  }
                `}
              </style>
            </div>
          </div>
        </StyledMessage>

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

        <StyledMessage type="sent">Av. Paulista, 1106 - 7º andar - Bela Vista, São Paulo - SP, 01311-000, Brasil</StyledMessage>

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
          Localização: Av. Paulista, 1106 - 7º andar - Bela Vista, São Paulo - SP, 01311-000, Brasil
          Ponto de Referência: Não tem
          Número de protocolo: 63587654156
          Táxi: Não
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

export default Home;
