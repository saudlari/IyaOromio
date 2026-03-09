import ExploreMapButton from "../../buttons/ExploreMapButton";
import LearnMoreButton from "../../buttons/LearnMoreButton";
import MermaidTail from "../../assets/MermaidTail.webp";
import Mermaid from "../../assets/Mermaid.webp";
import Map from "../Map";

export default function Hero() {
  return (
    <section className="relative">
      <div className="container mx-auto px-4 py-12 flex flex-col items-center gap-8">
        <div className="text-center text-neutral-content">
          <h1
            className="text-5xl font-bold font-display animate-fade-in-up"
            style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            Iyá <span className="text-secondary">Oromiô</span>
          </h1>
          <p
            className="mt-4 text-xl text-primary animate-fade-in-up"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            Mulheres de Axé
          </p>
        </div>

        <img
          src={MermaidTail}
          alt="Cauda da sereia"
          className="w-full max-w-4xl h-auto z-0 animate-float"
        />

        <div className="w-full max-w-5xl">
          <Map embedded embedOnlyMap mapHeight="50vh" />
        </div>

        <div className="flex flex-row gap-4 items-center justify-center">
          <ExploreMapButton /> {/* 5. Corpo da sereia */}
          <LearnMoreButton />
        </div>

        <img
          src={Mermaid}
          alt="Corpo da sereia"
          className="w-full max-w-5xl h-auto z-0 animate-float"
          style={{ animationDelay: "1.5s" }}
        />
      </div>
    </section>
  );
}
