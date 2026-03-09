import LearnMoreButton from '../../buttons/LearnMoreButton'

export default function AboutSection() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="card bg-base-100 shadow-sm max-w-5xl mx-auto overflow-hidden">
          <div className="hero-content flex-col lg:flex-row lg:items-stretch gap-8 p-8 lg:p-12">
            <figure className="flex-shrink-0">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5EppufXWmdvszk-pi6Y4uk1k7sCBWxbCOww&s"
                alt="Sobre o projeto"
                className="max-w-lg w-full lg:w-auto rounded-xl object-cover shadow-lg"
              />
            </figure>
            <div className="card-body flex flex-col justify-between p-0 lg:pl-4">
              <h1 className="text-5xl font-bold font-display text-base-content">
                Sobre <span className="text-secondary">o projeto</span>
              </h1>
              <p className="py-6 text-base-content/90">
                O projeto Iyá Oromiô nasce da necessidade urgente de documentar e
                acelerar a salvaguarda das tradições de matriz africana em Belém
                do Pará. Através de um mapeamento sensível, buscamos dar
                visibilidade às vozes que sustentam o axé na Amazônia. Nosso foco
                central está no protagonismo das mulheres de axé, lideranças
                espirituais e comunitárias que atuam como guardiãs da memória, da
                biodiversidade e da resistência cultural. Nesta fase inicial,
                apresentamos cinco trajetórias potenciais que sintetizam a
                diversidade e a força do território paraense.
              </p>
              <div className="card-actions w-fit pt-2">
                <LearnMoreButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
