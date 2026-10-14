import { Background } from './components/Background.jsx';
import { Header } from './components/Header.jsx';
import { Hero } from './sections/Hero.jsx';
import { Marquee } from './sections/Marquee.jsx';
import { Philosophy } from './sections/Philosophy.jsx';
import { Services } from './sections/Services.jsx';
import { Process } from './sections/Process.jsx';
import { Work } from './sections/Work.jsx';
import { Scope } from './sections/Scope.jsx';
import { Credentials } from './sections/Credentials.jsx';
import { Contact } from './sections/Contact.jsx';
import { Footer } from './sections/Footer.jsx';

export default function App() {
  return (
    <>
      <Background />
      <Header />
      <main id="top">
        <Hero />
        <Marquee />
        <Philosophy />
        <Services />
        <Process />
        <Work />
        <Scope />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
