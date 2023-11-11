// pages/about.js
import Link from 'next/link';

const About = () => {
  return (
    <div>
      <h2>Página Sobre Nós</h2>
      <p>Esta é a página sobre nós.</p>

      {/* Link de volta para a página inicial */}
      <Link href="/">Home</Link>
    </div>
  );
};

export default About;
