import { useForm } from 'react-hook-form'

const defaultValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ defaultValues })

  function onSubmit(data) {
    console.log('Form data:', data)
    reset()
  }

  return (
    <div className="min-h-screen flex flex-col text-base-content">
      <main className="flex-grow w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-3xl">
            <h1 className="text-4xl font-bold font-display mb-4">
              <span className="text-secondary">Contato</span>
            </h1>
            <p className="text-lg mb-10 max-w-2xl text-base-content/90">
              Fale com a equipe do projeto Iyá Oromiô para parcerias, dúvidas, entrevistas
              ou sugestões. Vamos adorar ouvir de você.
            </p>

            <div className="grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
              <section className="card bg-base-100/90 backdrop-blur-sm shadow-xl border border-base-content/10">
                <div className="card-body">
                  <h2 className="card-title mb-2">Envie uma mensagem</h2>
                  <p className="mb-4 text-sm text-base-content/70">
                    Preencha o formulário abaixo e entraremos em contato assim que possível.
                  </p>

                  <form
                    className="space-y-4"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="form-control">
                      <label className="label" htmlFor="name">
                        <span className="label-text">Nome</span>
                        {errors.name && (
                          <span className="label-text-alt text-error">{errors.name.message}</span>
                        )}
                      </label>
                      <input
                        id="name"
                        type="text"
                        className={`input input-bordered w-full ${errors.name ? 'input-error' : ''}`}
                        placeholder="Seu nome"
                        {...register('name', { required: 'Nome é obrigatório' })}
                      />
                    </div>

                    <div className="form-control">
                      <label className="label" htmlFor="email">
                        <span className="label-text">E-mail</span>
                        {errors.email && (
                          <span className="label-text-alt text-error">{errors.email.message}</span>
                        )}
                      </label>
                      <input
                        id="email"
                        type="email"
                        className={`input input-bordered w-full ${errors.email ? 'input-error' : ''}`}
                        placeholder="seu@email.com"
                        {...register('email', {
                          required: 'E-mail é obrigatório',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'E-mail inválido',
                          },
                        })}
                      />
                    </div>

                    <div className="form-control">
                      <label className="label" htmlFor="subject">
                        <span className="label-text">Sobre o que você gostaria de falar?</span>
                      </label>
                      <input
                        id="subject"
                        type="text"
                        className="input input-bordered w-full"
                        placeholder="Sobre o que você gostaria de falar?"
                        {...register('subject')}
                      />
                    </div>

                    <div className="form-control">
                      <label className="label" htmlFor="message">
                        <span className="label-text">Escreva sua mensagem</span>
                        {errors.message && (
                          <span className="label-text-alt text-error">{errors.message.message}</span>
                        )}
                      </label>
                      <textarea
                        id="message"
                        className={`textarea textarea-bordered w-full min-h-[140px] ${errors.message ? 'textarea-error' : ''}`}
                        placeholder="Escreva sua mensagem"
                        {...register('message', { required: 'Mensagem é obrigatória' })}
                      />
                    </div>

                    <div className="form-control mt-4">
                      <button
                        type="submit"
                        className="btn btn-secondary"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Enviando…' : 'Enviar mensagem'}
                      </button>
                    </div>
                  </form>
                </div>
              </section>

              <aside className="space-y-6">
                <div className="card bg-base-100/90 backdrop-blur-sm shadow-md border border-base-content/10">
                  <div className="card-body">
                    <h3 className="card-title mb-2">Informações de contato</h3>
                    <p className="text-sm text-base-content/70 mb-4">
                    
                    </p>
                    <ul className="space-y-3 text-sm">
                      <li>
                        <span className="font-semibold">E-mail:</span>{' '}
                        <a href="mailto:contato@iyaoromio.org" className="link link-hover">
                          contato@iyaoromio.org
                        </a>
                      </li>
                      <li>
                        <span className="font-semibold">Instagram:</span>{' '}
                    <a
                      href="https://www.instagram.com/iyaoromiomulheresdeaxe/"
                      target="_blank"
                      rel="noreferrer"
                      className="link link-hover"
                    >
                      @iyaoromio
                    </a>
                  </li>
                      <li>
                        <span className="font-semibold">Localização:</span>{' '}
                        Belém do Pará, Brasil
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="card bg-base-100/90 backdrop-blur-sm shadow-md border border-base-content/10">
                  <div className="card-body">
                    <h3 className="card-title mb-2">Sobre esta página</h3>
                    <p className="text-sm text-base-content/70">
                      Esta é a página de contato do projeto Iyá Oromiô, pensada para facilitar o
                      diálogo com pesquisadoras, comunidades de terreiro, organizações parceiras
                      e pessoas interessadas na memória das mulheres de axé em Belém do Pará.
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
      </main>
    </div>
  )
}

