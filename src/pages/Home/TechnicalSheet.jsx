export default function TechnicalSheet() {
  return (
    <div className="min-h-screen py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto bg-base-100/80 backdrop-blur-sm rounded-lg p-8 md:p-12">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-white"></div>
            <h2 className="text-white uppercase tracking-wider text-sm font-semibold">
              CREDITOS
            </h2>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold font-display">
            <span className="text-white">Ficha </span>
            <span className="text-info">Tecnica</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-warning uppercase text-sm font-semibold tracking-wider mb-2">
                IDEALIZACAO E COORDENACAO
              </h3>
              <p className="text-white text-lg">Yasmin Alves</p>
            </div>
            <div>
              <h3 className="text-warning uppercase text-sm font-semibold tracking-wider mb-2">
                PRODUCAO EXECUTIVA
              </h3>
              <p className="text-white text-lg">Yasmin Alves</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-warning uppercase text-sm font-semibold tracking-wider mb-2">
                FOTOGRAFIA E AUDIOVISUAL
              </h3>
              <p className="text-white text-lg">Yasmin Alves</p>
            </div>
            <div>
              <h3 className="text-warning uppercase text-sm font-semibold tracking-wider mb-2">
                IDENTIDADE VISUAL
              </h3>
              <p className="text-white text-lg">Filipe Almeida</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-warning uppercase text-sm font-semibold tracking-wider mb-2">
                PESQUISA E CURADORIA
              </h3>
              <p className="text-white text-lg">Yasmin Alves</p>
            </div>
            <div>
              <h3 className="text-warning uppercase text-sm font-semibold tracking-wider mb-2">
                DESENVOLVIMENTO WEB
              </h3>
              <p className="text-white text-lg">iwallab.site</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/20">
          <h2 className="text-warning uppercase text-sm font-semibold tracking-wider text-center mb-8">
            REALIZACAO E APOIO
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="text-white uppercase text-sm">LOGO</div>
            <div className="h-8 w-px bg-white/50"></div>
            <div className="text-white uppercase text-sm">LOGO</div>
            <div className="h-8 w-px bg-white/50"></div>
            <div className="text-white uppercase text-sm">LOGO</div>
          </div>
        </div>
      </div>
    </div>
  );
}
