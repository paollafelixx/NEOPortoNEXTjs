// pages/index.js
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Bem-vindo à página inicial!</p>
      
      {/* Link para a página "About" */}
      <Link href="/about">Sobre nós</Link>
    </div>
  );
};

export default Home;
