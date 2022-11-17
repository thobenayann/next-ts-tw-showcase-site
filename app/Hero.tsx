'use client';
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
          <h1 className="text-4xl md:text-5xl font-bold my-4 font-['bagnar']">Voici une demo de site exploitant le modèle d&apos;architecture de la Jamstack !</h1>
          <p className="py-6 my-4 text-lg">La <strong className="font-semibold text-slate-900 underline decoration-pink-500 decoration-4">Jamstack</strong> permet de délivrer un <strong className="font-semibold text-slate-900 underline decoration-sky-500 decoration-4">site web statique</strong>, tout en fournissant un contenu dynamique, pour proposer une <strong className="font-semibold text-slate-900 underline decoration-amber-500 decoration-4">expérience utilisateur</strong> interactive et moderne.</p>
          <button className="btn btn-primary shadow-xl shadow-blue-500/30">Get Started</button>
        </div>
      </div>
      {/* Blurry, Animated Background Shapes */}
      <div className="relative w-full max-w-screen md:max-w-3xl">
        <div className="absolute top-0 -left-4 md:-left-3/4 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-28 -right-0 md:-right-4 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 md:left-20 w-72 h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
    </div>
  )
}

export default Hero