// pages/index.js
import Head from 'next/head';
import '../styles/styles.css';  // Importe o arquivo styles.css diretamente

const Home = () => (
  <div>
    <Head>
      {/* ... */}
    </Head>

    <main className="chat-container">
      
      <div className="message-container">

        <div className="message sent">
          <p>Olá</p>
        </div>

        <div className="message received">
          <p>Você entrou em contato com o PortoHelp, 
              o mais novo serviço de atendimento ao cliente
              da Porto Seguro.
              Vou precisar do CPF do propietário do veículo!</p>
        </div>

      </div>
      
      <div className="input-container">
        <input
          type="text"
          className="input"
          placeholder="Digite sua mensagem..."
        />
        <button className="button">Enviar</button>
      </div>
    </main>

    <footer>

    </footer>
  </div>
);

export default Home;
