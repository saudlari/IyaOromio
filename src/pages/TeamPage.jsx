import Header from '../components/Header'

  export default function TeamPage() {
    return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold font-display mb-8">A <span className="text-secondary">equipe</span></h1>
        <p className="text-lg">
          Información sobre el equipe del proyecto Iyá Oromiô.
        </p>
      </div>
    </>
  )
}

