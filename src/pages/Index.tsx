import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Experience } from '@/components/Experience';
import { Services } from '@/components/Services';
import { Testimonials } from '@/components/Testimonials';
import { BlogPreview } from '@/components/blog/BlogPreview';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Services />
        <Testimonials />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
