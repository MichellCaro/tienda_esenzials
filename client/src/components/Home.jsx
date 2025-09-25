import React from 'react';
import PromoBar from './PromoBar';
import Header from './Header';
import Section3Images from './Section3Images';
import SectionImageText from './SectionImageText';
import GallerySlider from './GallerySlider';
import Footer from './Footer';

function Home() {
  return (
    <>
      <PromoBar />
      <Header />

      {/* Hero con video de fondo */}
      <section className="hero relative h-screen flex items-center justify-center bg-marfil">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute w-full h-full object-cover"
        >
          <source src="/assets/hero.mp4" type="video/mp4" />
        </video>
        <div className="relative text-center text-carbon">
          <h1 className="text-5xl font-title mb-4">Esenzials</h1>
          <p className="text-xl mb-6">
            Rutinas de belleza inspiradas en la esencia natural
          </p>
          <a 
            href="#productos" 
            className="px-6 py-3 bg-salvia text-marfil font-semibold rounded-lg hover:bg-dorado transition"
          >
            Ver Productos
          </a>
        </div>
      </section>

      {/* Resto de secciones */}
      <Section3Images />
      <SectionImageText />
      <GallerySlider />
      <Footer />
    </>
  );
}

export default Home;

