import { Navbar }         from '@/components/Navbar/Navbar';
import { Hero }           from '@/components/Hero/Hero';
import { Services }       from '@/components/Services/Services';
import { WhyCreatIA }     from '@/components/WhyCreatIA/WhyCreatIA';
import { About }          from '@/components/About/About';
import { Contact }        from '@/components/Contact/Contact';
import { Footer }         from '@/components/Footer/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton/WhatsAppButton';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyCreatIA />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
