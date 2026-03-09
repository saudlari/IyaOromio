import { useParams } from 'react-router-dom'
import BackToMapButton from '../buttons/BackToMapButton'
import { WOMEN_MARKERS } from '../data/women'

function TagBadge({ tag }) {
  return (
    <span className="inline-flex items-center h-7 px-3 rounded-full bg-base-100/80 border border-base-content/20 text-xs font-medium uppercase tracking-wider text-base-content">
      {tag.label}
    </span>
  )
}

export default function WomanProfile() {
  const { id } = useParams()
  const woman = WOMEN_MARKERS.find((w) => w.id === id)

  if (!woman) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow container mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold font-display mb-4 text-base-content">
            Mulher não encontrada
          </h1>
          <BackToMapButton>Voltar ao mapa</BackToMapButton>
        </main>
      </div>
    )
  }

  const hasGallery = woman.gallery && woman.gallery.length > 0
  const hasLifeStory = woman.lifeStory && woman.lifeStory.length > 0

  return (
    <div className="min-h-screen flex flex-col text-base-content">
      <main className="flex-grow w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="mb-8">
          <BackToMapButton className="btn-primary" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Foto */}
          <div className="md:col-span-5 lg:col-span-4">
            <div className="aspect-[3/4] w-full rounded-xl overflow-hidden shadow-2xl bg-base-100 relative group border-4 border-base-content/10">
              <div
                className="w-full h-full bg-cover bg-center transition-all duration-500"
                style={{
                  backgroundImage: woman.imageUrl
                    ? `url(${woman.imageUrl})`
                    : undefined,
                  backgroundColor: !woman.imageUrl ? 'var(--color-base-300)' : undefined,
                }}
              />
              {woman.imageUrl && (
                <div className="absolute inset-0 bg-base-100/20 group-hover:bg-transparent transition-all duration-500" />
              )}
            </div>
          </div>

          <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-center">
            {woman.tags && woman.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {woman.tags.map((tag, i) => (
                  <TagBadge key={i} tag={tag} />
                ))}
              </div>
            )}
            <h2 className="text-4xl sm:text-5xl font-bold font-display leading-tight tracking-tight mb-2 text-base-content">
              {woman.name}
            </h2>
            {woman.shortDescription && (
              <p className="text-lg text-base-content/80 font-medium mb-6 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-primary block" />
                {woman.shortDescription}
              </p>
            )}
            {woman.bio && (
              <p className="text-base sm:text-lg leading-relaxed text-base-content/90 mb-8">
                {woman.bio}
              </p>
            )}
            {(woman.initiationYear || woman.orixa || woman.city) && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-base-content/10">
                {woman.initiationYear && (
                  <div>
                    <p className="text-xs text-primary font-bold uppercase tracking-widest mb-1">Iniciação</p>
                    <p className="text-base font-semibold text-base-content">{woman.initiationYear}</p>
                  </div>
                )}
                {woman.orixa && (
                  <div>
                    <p className="text-xs text-primary font-bold uppercase tracking-widest mb-1">Orixá</p>
                    <p className="text-base font-semibold text-base-content">{woman.orixa}</p>
                  </div>
                )}
                {woman.city && (
                  <div>
                    <p className="text-xs text-primary font-bold uppercase tracking-widest mb-1">Cidade</p>
                    <p className="text-base font-semibold text-base-content">{woman.city}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {hasLifeStory && (
          <section className="bg-base-100/80 backdrop-blur-sm rounded-xl p-6 sm:p-10 mb-12 shadow-md border border-base-content/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
              <svg className="w-24 h-24 text-base-content" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            </div>
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="p-2 bg-primary/10 rounded-lg">
                <span className="text-primary text-2xl font-bold">📖</span>
              </div>
              <h3 className="text-2xl font-bold font-display text-base-content">História de Vida</h3>
            </div>
            <div className="space-y-4 text-base-content/80 leading-relaxed text-lg relative z-10">
              {woman.lifeStory.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
              {woman.lifeStoryQuote && (
                <p className="font-medium text-base-content italic border-l-4 border-primary pl-4 my-6">
                  {woman.lifeStoryQuote}
                </p>
              )}
            </div>
          </section>
        )}

        {hasGallery && (
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6 px-2 border-b border-base-content/10 pb-4">
              <h3 className="text-2xl font-bold font-display text-base-content">Galeria</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {woman.gallery.map((item, i) => (
                <div
                  key={i}
                  className="group relative aspect-square overflow-hidden rounded-xl bg-base-100 cursor-pointer border-4 border-base-content/10 hover:border-primary/50 transition-colors duration-300"
                >
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base-100/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <p className="text-base-content font-bold border-l-4 border-primary pl-2">{item.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {!woman.bio && !hasLifeStory && woman.shortDescription && (
          <section className="bg-base-100/80 backdrop-blur-sm rounded-xl p-6 sm:p-10 mb-12 shadow-md border border-base-content/10">
            <p className="text-base-content/90 leading-relaxed">{woman.shortDescription}</p>
          </section>
        )}
      </main>
    </div>
  )
}
