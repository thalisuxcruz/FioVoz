import { BookOpen, Shield } from 'lucide-react'
import { ViewState } from '../components/Shared'

export const Rules = ({
  onViewChange,
}: {
  onViewChange: (v: ViewState) => void
}) => {
  const sections = [
    { id: 'preservacao', title: 'Preservacao do conteudo original' },
    { id: 'citacoes', title: 'Citacoes e Autores' },
    { id: 'siglas', title: 'Siglas (Expansao e Sonorizacao)' },
    { id: 'imagens', title: 'Imagens e Tabelas' },
    { id: 'referencias', title: 'Referencias Bibliograficas' },
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
            Voltar ao inicio
          </button>
          <h1 className="text-4xl font-serif text-fio-text mb-4">
            Regras de Adaptacao
          </h1>
          <p className="text-lg text-fio-textLight max-w-3xl">
            Entenda os criterios de acessibilidade aplicados pelo FioVoz para
            transformar documentos em roteiros de audiobook, mantendo o rigor
            academico e institucional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="hidden lg:block lg:col-span-3 sticky top-24">
            <nav className="space-y-1">
              <h3 className="text-xs font-bold uppercase tracking-wider text-fio-textLight mb-4 px-3">
                Nesta pagina
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
                    O FioVoz nunca altera o conteudo original.
                  </h2>
                  <p className="text-fio-textLight leading-relaxed">
                    Como uma ferramenta institucional da Fiocruz Brasilia,
                    respeitamos rigorosamente os direitos autorais. O valor do
                    FioVoz esta na estruturacao da leitura, nao na reescrita.
                    Nenhuma palavra conceitual do autor e modificada.
                  </p>
                </div>
              </div>
            </section>

            <RuleSection
              id="citacoes"
              title="Citacoes e Autores"
              body="Citacoes academicas no formato ABNT quebram o ritmo da narracao e dificultam a compreensao em audio. O FioVoz adapta essas chamadas para uma linguagem fluida."
              original="A saude publica (SILVA, 2020) e essencial."
              adapted="A saude publica e essencial, conforme aponta Silva, no ano de 2020."
            />

            <RuleSection
              id="siglas"
              title="Siglas (Expansao e Sonorizacao)"
              body="Siglas conhecidas sao mantidas por extenso na primeira mencao e sonorizadas nas seguintes, garantindo que o ouvinte compreenda a instituicao referida sem confusao fonetica."
              original="O SUS e a OMS definiram metas."
              adapted="O Sistema Unico de Saude e a Organizacao Mundial da Saude definiram metas."
            />

            <section id="imagens" className="scroll-mt-24">
              <h2 className="text-2xl font-serif text-fio-text mb-6">
                Imagens e Tabelas
              </h2>
              <p className="text-fio-textLight mb-6 leading-relaxed">
                O FioVoz nao gera audiodescricoes automaticamente para evitar
                alucinacoes de IA em graficos cientificos. Em vez disso, ele
                insere marcadores claros no roteiro para que o locutor saiba
                exatamente onde ler a descricao fornecida pela equipe de
                acessibilidade.
              </p>

              <div className="bg-fio-sand/10 border-l-4 border-fio-sand p-4 rounded-r-lg">
                <p className="text-sm font-mono text-fio-textLight m-0">
                  [Aviso ao locutor: Inserir descricao da Figura 1 - Grafico de
                  incidencia]
                </p>
              </div>
            </section>

            <section id="referencias" className="scroll-mt-24">
              <h2 className="text-2xl font-serif text-fio-text mb-6">
                Referencias Bibliograficas
              </h2>
              <p className="text-fio-textLight leading-relaxed">
                Ler uma lista de referencias bibliograficas no final de um
                capitulo de audiobook e exaustivo e pouco util para o ouvinte. O
                FioVoz extrai automaticamente a secao de referencias e sugere
                que ela seja gravada como uma faixa de audio separada.
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
          Adaptado para Audio
        </div>
        <p className="font-serif text-sm text-fio-text">{adapted}</p>
      </div>
    </div>
  </section>
)
