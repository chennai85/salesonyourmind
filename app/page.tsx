import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { Services } from '@/app/components/Services';
import { About } from '@/app/components/About';
import { Testimonials } from '@/app/components/Testimonials';
import { Contact } from '@/app/components/Contact';
import { Footer } from '@/app/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
