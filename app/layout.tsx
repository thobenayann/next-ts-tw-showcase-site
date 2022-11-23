import Footer from './Footer';
import Header from './Header';
import "./output.css";

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth" data-theme="mytheme">
      <head>
        <title>Jamstack demo by Ipanova</title>
        <meta name="description" content="Démo d'un site au modèle Jamstack exploitant les technos Strapi, NextJS, TailwindCSS et bien d'autres" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}