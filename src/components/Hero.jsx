import ExploreMapButton from '../buttons/ExploreMapButton'
import LearnMoreButton from '../buttons/LearnMoreButton'
import MermaidTail from '../assets/MermaidTail.webp'

export default function Hero() {
    return (
        <div>
            <div
                className="hero min-h-screen relative"
            >
                <div className="hero-overlay"></div>
                <img src={MermaidTail} alt="Mermaid Tail" className="absolute top-10 left-1/2 transform -translate-x-1/2 w-full max-w-5xl z-10" />
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold font-display">Iyá <span className="text-secondary">Oromiô</span></h1>
                        <p className="mb-5 text-xl text-primary">
                           Mulheres de Axé
                        </p>
                        <div className="flex flex-row gap-4 items-center justify-center">
                            <ExploreMapButton />
                            <LearnMoreButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}