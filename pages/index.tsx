import Head from 'next/head';

// components
import Footer from '@components/Footer';
import Header from '@components/Header';
import Hero from '@components/Hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jamstack demo by Ipanova</title>
        <meta name="description" content="Démo d'un site au modèle Jamstack exploitant les technos Strapi, NextJS, TailwindCSS et bien d'autres" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
      </main>

      <Footer />
    </div>
  )
}
