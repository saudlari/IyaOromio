import ExploreMapButton from '../../buttons/ExploreMapButton'
import LearnMoreButton from '../../buttons/LearnMoreButton'
import MermaidTail from '../../assets/MermaidTail.webp'
import Mermaid from '../../assets/Mermaid.webp'

export default function Hero() {
    return (
        <div>
            <div
                className="hero min-h-screen relative"
            >
                <img src={MermaidTail} alt="Mermaid Tail" className="absolute top-10 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-auto z-0 animate-float" />
                <img src={Mermaid} alt="Mermaid" className="absolute top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-auto z-0 animate-float" style={{ animationDelay: '1.5s' }} />
                <div className="hero-content text-neutral-content text-center relative z-10">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold font-display animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>Iyá <span className="text-secondary">Oromiô</span></h1>
                        <p className="mb-5 text-xl text-primary animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
                           Mulheres de Axé
                        </p>
                        <div className="flex flex-row gap-4 items-center justify-center animate-fade-in-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
                            <ExploreMapButton />
                            <LearnMoreButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

