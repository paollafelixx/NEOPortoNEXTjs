// pages/about.js
import Link from 'next/link';
import styles from '../styles/styles.css';

const About = () => {
  return (
    <div>
      <header className={styles.header}>
        <h2>Página Sobre Nós</h2>
      </header>
      <main className={styles.main}>
        <p>Esta é a página sobre nós.</p>
        <Link href="/">Home</Link>
      </main>
      <footer className={styles.footer}>
        <p>Rodapé - © 2023</p>
      </footer>
    </div>
  );
};

export default About;
