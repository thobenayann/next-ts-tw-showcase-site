import Image from 'next/image';
import { useEffect, useState } from 'react';

const Hero = () => {
  function getWindowWidth() {
    if (typeof window !== "undefined") {
      const { innerWidth: width } = window;
      return {
        width,
      };
    }
  }

  const [windowWidth, setWindowWidth] = useState(getWindowWidth());
  const [isMobileWidth, setIsMobileWidth] = useState(false);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth && windowWidth.width < 640) {
      setIsMobileWidth(true);
    } else {
      setIsMobileWidth(false);
    }
  }, [windowWidth]);

  return (
    <div style={{ height: '92vh' }} className={`bg-base-200 ${isMobileWidth ? '' : 'hero'}`}>
      <div className="hero-content flex-col lg:flex-row-reverse mt-6 md:mt-0">
        <Image
          alt="hero"
          src="/assets/jamstack.png"
          className="max-w-sm rounded-lg shadow-2xl"
          width={isMobileWidth ? 260 : 360}
          height={500}
        />
        <div className="mx-8 md:mx-14">
          <h1 className="text-4xl md:text-5xl font-bold my-4">Voici une demo de site exploitant le modèle d&apos;architecture de la Jamstack !</h1>
          <p className="py-6 my-4">La Jamstack permet de délivrer un site web statique, tout en fournissant un contenu dynamique, pour proposer une expérience utilisateur interactive et moderne.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Hero