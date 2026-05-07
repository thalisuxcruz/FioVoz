import { motion } from 'framer-motion'
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Headphones,
  Layers,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { Button, ViewState } from '../components/Shared'

export const Landing = ({
  onViewChange,
}: {
  onViewChange: (v: ViewState) => void
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative pt-20 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-fio-paperDark via-fio-paper to-fio-paper -z-10" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fio-teal/5 border border-fio-teal/10 text-fio-teal text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Acessibilidade Educacional</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif text-fio-text leading-[1.1] mb-6 text-balance">
              Aulas e documentos prontos para virar{' '}
              <span className="text-fio-teal italic">audiobook.</span>
            </h1>
            <p className="text-lg text-fio-textLight mb-8 leading-relaxed max-w-xl">
              O FioVoz transforma materiais academicos em texto corrido
              preparado para leitura em voz alta.
              <strong className="font-medium text-fio-text">
                {' '}
                Preservamos 100% do conteudo original
              </strong>
              , estruturando apenas a forma para garantir acessibilidade e
              inclusao.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                onClick={() => onViewChange('workspace')}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Comecar a preparar aula
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => onViewChange('result')}
              >
                Ver exemplo
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-fio-teal/5 rounded-full blur-3xl" />
              <div className="relative h-full w-full bg-white rounded-2xl shadow-card border border-fio-border p-8 flex flex-col justify-between overflow-hidden">
                <div className="space-y-4 opacity-80">
                  <div className="h-4 w-3/4 bg-fio-paperDark rounded" />
                  <div className="h-3 w-full bg-fio-paperDark rounded" />
                  <div className="h-3 w-5/6 bg-fio-paperDark rounded" />
                  <div className="flex gap-2 items-center mt-4">
                    <div className="h-8 w-8 bg-fio-sand/20 rounded flex items-center justify-center">
                      <span className="text-xs font-mono text-fio-sand font-bold">
                        FIG 1
                      </span>
                    </div>
                    <div className="h-3 w-1/2 bg-fio-paperDark rounded" />
                  </div>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-fio-teal rounded-full flex items-center justify-center shadow-lg z-10">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>

                <div className="space-y-6 mt-auto">
                  <div className="flex items-end gap-1 h-16 justify-center">
                    {[40, 70, 45, 90, 65, 30, 85, 50, 75, 35, 60].map(
                      (height, index) => (
                        <motion.div
                          key={index}
                          animate={{
                            height: [`${height}%`, `${height * 0.5}%`, `${height}%`],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: index * 0.1,
                          }}
                          className="w-2 bg-fio-teal rounded-t-sm"
                        />
                      ),
                    )}
                  </div>
                  <div className="flex items-center justify-center gap-2 text-fio-teal text-sm font-medium">
                    <Headphones className="w-4 h-4" />
                    <span>Pronto para narracao</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white border-y border-fio-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-fio-text mb-4">
              Por que usar o FioVoz?
            </h2>
            <p className="text-fio-textLight max-w-2xl mx-auto">
              Uma ferramenta pensada para as necessidades reais da educacao
              publica e producao de materiais acessiveis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: 'Preservacao do conteudo',
                desc: 'O texto original e os direitos autorais sao mantidos intactos.',
              },
              {
                icon: Layers,
                title: 'Padronizacao',
                desc: 'Aplica regras consistentes de leitura para todo o material.',
              },
              {
                icon: Headphones,
                title: 'Apoio a narracao',
                desc: 'Facilita o trabalho de locutores e softwares de leitura de tela.',
              },
              {
                icon: BookOpen,
                title: 'Acessibilidade',
                desc: 'Torna o conhecimento cientifico acessivel a mais pessoas.',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-fio-border bg-fio-paper hover:shadow-soft transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-fio-sage/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-5 h-5 text-fio-sage" />
                </div>
                <h3 className="font-serif font-medium text-lg mb-2 text-fio-text">
                  {benefit.title}
                </h3>
                <p className="text-sm text-fio-textLight leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-fio-paperDark">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-fio-text mb-16 text-center">
            Como funciona
          </h2>

          <div className="flex flex-col md:flex-row gap-8 relative">
            <div className="hidden md:block absolute top-6 left-0 w-full h-[1px] bg-fio-border" />

            {[
              ['1', 'Cole o texto', 'Insira o conteudo original da sua aula ou documento.'],
              ['2', 'FioVoz aplica regras', 'O sistema estrutura o texto para leitura em voz alta.'],
              ['3', 'Revise o resultado', 'Confira as adaptacoes e avisos sobre imagens.'],
              ['4', 'Exporte para narracao', 'Baixe o roteiro pronto para o estudio ou leitor de tela.'],
            ].map(([step, title, desc]) => (
              <div key={step} className="flex-1 relative z-10">
                <div className="w-12 h-12 rounded-full bg-fio-teal text-white flex items-center justify-center font-serif text-xl mb-6 shadow-sm border-4 border-fio-paperDark mx-auto md:mx-0">
                  {step}
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-medium text-fio-text mb-2">{title}</h4>
                  <p className="text-sm text-fio-textLight">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-serif text-fio-text mb-6">
              Regras aplicadas automaticamente
            </h2>
            <p className="text-fio-textLight mb-8">
              O FioVoz segue diretrizes rigidas de acessibilidade para garantir
              que a narracao flua naturalmente, sem perder o rigor academico.
            </p>

            <ul className="space-y-4">
              {[
                'Transforma citacoes em formato narravel',
                'Expande e sonoriza siglas (ex: SUS, OMS)',
                'Remove paginacao e cabecalhos soltos',
                'Orienta descricoes de imagens e tabelas',
                'Trata notas de rodape como pausas explicativas',
                'Separa referencias bibliograficas do audio principal',
              ].map((rule) => (
                <li
                  key={rule}
                  className="flex items-start gap-3 pb-4 border-b border-fio-border last:border-0"
                >
                  <CheckCircle2 className="w-5 h-5 text-fio-sage shrink-0 mt-0.5" />
                  <span className="text-fio-text">{rule}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button variant="outline" onClick={() => onViewChange('rules')}>
                Ver todas as regras detalhadas
              </Button>
            </div>
          </div>

          <div className="bg-fio-paper rounded-2xl border border-fio-border overflow-hidden shadow-card">
            <div className="grid grid-cols-2 border-b border-fio-border bg-fio-paperDark">
              <div className="p-3 text-center text-xs font-medium text-fio-textLight uppercase tracking-wider">
                Original
              </div>
              <div className="p-3 text-center text-xs font-medium text-fio-teal uppercase tracking-wider border-l border-fio-border bg-fio-teal/5">
                Adaptado (FioVoz)
              </div>
            </div>
            <div className="grid grid-cols-2 divide-x divide-fio-border">
              <div className="p-6 font-mono text-xs leading-relaxed text-fio-textLight bg-white">
                A saude publica no Brasil (SILVA, 2020, p. 45) enfrenta
                desafios. Segundo a OMS, "a equidade e fundamental" (2019).
                <br />
                <br />
                [Fig. 2 - Grafico de vacinacao]
                <br />
                <br />O SUS precisa de mais investimentos estruturais.
              </div>
              <div className="p-6 font-serif text-sm leading-relaxed text-fio-text bg-fio-teal/5">
                A saude publica no Brasil enfrenta desafios, conforme aponta
                Silva, no ano de 2020.
                <br />
                <br />
                Segundo a Organizacao Mundial da Saude, abre aspas, a equidade e
                fundamental, fecha aspas.
                <br />
                <br />
                <span className="text-fio-sand font-mono text-xs bg-fio-sand/10 px-1 rounded">
                  [Aviso ao locutor: Inserir descricao da Figura 2 - Grafico de
                  vacinacao]
                </span>
                <br />
                <br />O Sistema Unico de Saude precisa de mais investimentos
                estruturais.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-fio-sand/10 border-t border-fio-sand/20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif text-fio-text mb-6">
            Pronto para tornar suas aulas mais acessiveis?
          </h2>
          <p className="text-fio-textLight mb-8">
            Junte-se as equipes da Fiocruz que ja estao transformando a educacao
            a distancia.
          </p>
          <Button size="lg" onClick={() => onViewChange('workspace')}>
            Comecar a preparar aula
          </Button>
        </div>
      </section>
    </div>
  )
}
