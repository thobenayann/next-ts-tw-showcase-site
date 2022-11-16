import Head from 'next/head';

// components
import Feature from '@components/Feature';
import Footer from '@components/Footer';
import Header from '@components/Header';
import Hero from '@components/Hero';
import Step from '@components/Step';

export default function Home() {
  return (
    <div lang="fr-FR" data-theme="mytheme">
      <Head>
        <title>Jamstack demo by Ipanova</title>
        <meta name="description" content="Démo d'un site au modèle Jamstack exploitant les technos Strapi, NextJS, TailwindCSS et bien d'autres" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Hero />
        <Feature />
        <Step />
      </main>

      <Footer />

    </div>
  )
}
