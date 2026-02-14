import ExploreMapButton from '../buttons/ExploreMapButton'
import LearnMoreButton from '../buttons/LearnMoreButton'

export default function Hero() {
    return (
        <div>
            <div
                className="hero min-h-screen"
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold font-display">Iyá <span className="text-secondary">Oromiô</span></h1>
                        <p className="mb-5 text-xl text-primary">
                           Mulheres de Axé
                        </p>
                        <ExploreMapButton />
                        <LearnMoreButton />
                    </div>
                </div>
            </div>
        </div>
    )
}