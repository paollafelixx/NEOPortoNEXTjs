// pages/index.js
import Link from 'next/link';
import styles from '../styles/styles.css';

const Home = () => {
  return (
    <div>
      <header className={styles.header}>
        <h2>Home Page</h2>
      </header>
      <main className={styles.main}>
        <p>Bem-vindo à página inicial!</p>
        <Link href="/about">Sobre nós</Link>
      </main>
      <footer className={styles.footer}>
        <p>Rodapé - © 2023</p>
      </footer>
    </div>
  );
};

export default Home;
