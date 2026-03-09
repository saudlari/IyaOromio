import WomanCard from '../../components/WomanCard'
import { WOMEN_MARKERS } from '../../data/women'

export default function WomanSection() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold font-display mb-8 text-center">
          Mulheres <span className="text-secondary">de Axé</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {WOMEN_MARKERS.map((woman) => (
            <WomanCard key={woman.id} woman={woman} />
          ))}
        </div>
      </div>
    </div>
  )
}
