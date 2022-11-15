import Image from 'next/image'

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          alt="hero"
          src="/assets/jamstack.png"
          className="max-w-sm rounded-lg shadow-2xl"
          width={360}
          height={500}
        />
        <div className="mx-14">
          <h1 className="text-5xl font-bold my-4">Voici une demo de site exploitant le modèle d&apos;architecture de la Jamstack !</h1>
          <p className="py-6 my-4">La Jamstack permet de délivrer un site web statique, tout en fournissant un contenu dynamique, pour proposer une expérience utilisateur interactive et moderne.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Hero