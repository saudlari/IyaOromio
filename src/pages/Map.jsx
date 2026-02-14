import Header from '../components/Header'

export default function Map() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold font-display mb-8">Explorar <span className="text-secondary">mapa</span></h1>
        <p className="text-lg">
          Mapa interactivo del proyecto Iyá Oromiô.
        </p>
      </div>
    </>
  )
}

