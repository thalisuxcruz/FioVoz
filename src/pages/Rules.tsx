import { BookOpen, Shield } from 'lucide-react'
import { ViewState } from '../components/Shared'

export const Rules = ({
  onViewChange,
}: {
  onViewChange: (v: ViewState) => void
}) => {
  const sections = [
    { id: 'preservacao', title: 'Preservação do conteúdo original' },
    { id: 'citacoes', title: 'Citações e Autores' },
    { id: 'siglas', title: 'Siglas (Expansão e Sonorização)' },
    { id: 'referencias', title: 'Referências Bibliográficas' },
  ]

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 border-b border-fio-border pb-8">
          <button
            className="text-sm text-fio-teal hover:text-fio-tealLight mb-5 inline-flex items-center gap-2"
            onClick={() => onViewChange('landing')}
          >
            <BookOpen className="w-4 h-4" />
            Voltar ao início
          </button>
          <h1 className="text-4xl font-serif text-fio-text mb-4">
            Critérios de preparação
          </h1>
          <p className="text-lg text-fio-textLight max-w-3xl">
            Entenda os critérios de acessibilidade aplicados pelo FioVoz para
            transformar documentos em roteiros de audiobook, mantendo o rigor
            acadêmico e institucional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="hidden lg:block lg:col-span-3 sticky top-24">
            <nav className="space-y-1">
              <h3 className="text-xs font-bold uppercase tracking-wider text-fio-textLight mb-4 px-3">
                Nesta página
              </h3>
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block px-3 py-2 text-sm text-fio-text hover:text-fio-teal hover:bg-fio-paper rounded-lg transition-colors"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-9 space-y-16">
            <section id="preservacao" className="scroll-mt-24">
              <div className="bg-fio-teal/5 border border-fio-teal/20 rounded-2xl p-6 mb-8 flex gap-4 items-start">
                <Shield className="w-8 h-8 text-fio-teal shrink-0" />
                <div>
                  <h2 className="text-xl font-serif text-fio-text mb-2">
                    O conteúdo original é preservado.
                  </h2>
                  <p className="text-fio-textLight leading-relaxed">
                    Como uma ferramenta institucional da Fiocruz Brasília,
                    respeitamos rigorosamente os direitos autorais. O valor do
                    FioVoz está na preparação da leitura, não na reescrita.
                    O texto é organizado para leitura em voz alta sem
                    substituir a aula original.
                  </p>
                </div>
              </div>
            </section>

            <RuleSection
              id="citacoes"
              title="Citações e Autores"
              body="Citações acadêmicas no formato ABNT quebram o ritmo da narração e dificultam a compreensão em áudio. O FioVoz prepara essas chamadas para uma leitura mais fluida."
              original="A saúde pública (SILVA, 2020) é essencial."
              adapted="A saúde pública é essencial, conforme aponta Silva, no ano de 2020."
            />

            <RuleSection
              id="siglas"
              title="Siglas (Expansão e Sonorização)"
              body="Siglas conhecidas são mantidas por extenso na primeira menção e sonorizadas nas seguintes, garantindo que o ouvinte compreenda a instituição referida sem confusão fonética."
              original="O SUS e a OMS definiram metas."
              adapted="O Sistema Único de Saúde e a Organização Mundial da Saúde definiram metas."
            />

            <section id="referencias" className="scroll-mt-24">
              <h2 className="text-2xl font-serif text-fio-text mb-6">
                Referências Bibliográficas
              </h2>
              <p className="text-fio-textLight leading-relaxed">
                Ler uma lista de referências bibliográficas no final de um
                capítulo de audiobook é exaustivo e pouco útil para o ouvinte. O
                FioVoz orienta que a seção de referências seja tratada como um
                arquivo separado, conforme os critérios do projeto.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

const RuleSection = ({
  id,
  title,
  body,
  original,
  adapted,
}: {
  id: string
  title: string
  body: string
  original: string
  adapted: string
}) => (
  <section id={id} className="scroll-mt-24">
    <h2 className="text-2xl font-serif text-fio-text mb-6">{title}</h2>
    <p className="text-fio-textLight mb-6 leading-relaxed">{body}</p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-fio-paperDark p-4 rounded-xl border border-fio-border">
      <div className="bg-white p-4 rounded-lg border border-fio-border">
        <div className="text-xs font-bold text-fio-textLight uppercase mb-2">
          Original
        </div>
        <p className="font-mono text-sm text-fio-textLight">{original}</p>
      </div>
      <div className="bg-fio-teal/5 p-4 rounded-lg border border-fio-teal/20">
        <div className="text-xs font-bold text-fio-teal uppercase mb-2">
          Preparado para Áudio
        </div>
        <p className="font-serif text-sm text-fio-text">{adapted}</p>
      </div>
    </div>
  </section>
)
