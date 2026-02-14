import LearnMoreButton from '../../buttons/LearnMoreButton'
export default function AboutSection() {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row lg:items-stretch gap-8">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5EppufXWmdvszk-pi6Y4uk1k7sCBWxbCOww&s"
                        className="max-w-lg w-full lg:w-auto h-full rounded-lg shadow-2xl object-cover"
                    />
                    <div className="flex flex-col justify-between">
                        <h1 className="text-5xl font-bold font-display">Sobre <span className="text-secondary">o projeto</span></h1>
                        <p className="py-6">
                        O  projeto Iya Oromio nasce da necessidade urgente de documentar e celerar a salvaguarda das tradicoes de matriz africana em  Belem do Para. Atraves de um mapeamento sensivel, buscamos dar visibilidade as vzes que sustentam o axe na Amazonia. 
                        Nosso foco central esta no Protagonismo das Mukheres de Axe , liderencas espirituais e comunitarias que atuam como guardias da memoria, da biodiversidade e da resistencia cultural. Nesta fase inicial, apresentamos cinco trajetorias potesntes que sintetiza a diversidade e a forca do territorio paraense
                        </p>
                        <div className="w-fit">
                            <LearnMoreButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

