import { useState } from 'react'
import {
  BookMarked,
  Check,
  ChevronRight,
  FileText,
  Image as ImageIcon,
  Shield,
  Sparkles,
} from 'lucide-react'
import { Button, ViewState } from '../components/Shared'

export const Workspace = ({
  onViewChange,
}: {
  onViewChange: (v: ViewState) => void
}) => {
  const [text, setText] = useState('')
  const [sepRefs, setSepRefs] = useState(true)
  const [hasImages, setHasImages] = useState(false)

  const handleProcess = () => {
    if (text.trim().length > 0) {
      onViewChange('result')
    }
  }

  const loadExample = () => {
    setText(`A vigilancia epidemiologica no Brasil (SILVA, 2021, p. 112) tem sido fundamental para o controle de doencas. Segundo o Ministerio da Saude, "a notificacao compulsoria e o principal instrumento" (2020).

A OMS estabelece diretrizes globais para o monitoramento.

[Fig. 1 - Mapa de Casos de Dengue em 2022]

O SUS atua na ponta, garantindo atendimento. Como aponta Oliveira (2019):
"A capilaridade do sistema permite respostas rapidas a surtos locais." (p. 45)`)
  }

  return (
    <div className="min-h-[calc(100vh-64px)] bg-fio-paperDark py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-2 text-sm text-fio-textLight mb-6">
          <button
            onClick={() => onViewChange('landing')}
            className="hover:text-fio-teal transition-colors"
          >
            Inicio
          </button>
          <ChevronRight className="w-4 h-4" />
          <span className="text-fio-text font-medium">Preparar aula</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div className="bg-white rounded-2xl shadow-card border border-fio-border overflow-hidden flex flex-col h-[600px]">
              <div className="p-4 border-b border-fio-border bg-fio-paper flex justify-between items-center">
                <h2 className="font-serif text-lg text-fio-text flex items-center gap-2">
                  <FileText className="w-5 h-5 text-fio-teal" />
                  Cole aqui o texto da aula
                </h2>
                <button
                  onClick={loadExample}
                  className="text-xs font-medium text-fio-teal hover:underline"
                >
                  Inserir texto de exemplo
                </button>
              </div>

              <div className="flex-1 relative p-6">
                <textarea
                  value={text}
                  onChange={(event) => setText(event.target.value)}
                  placeholder="Cole o texto do documento aqui. O FioVoz vai estruturar para narracao sem alterar o conteudo original."
                  className="w-full h-full resize-none outline-none font-serif text-lg leading-relaxed text-fio-text placeholder:text-fio-textLight/50 bg-transparent"
                />

                {text.length === 0 && (
                  <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center text-fio-textLight/40">
                    <Sparkles className="w-12 h-12 mb-4 opacity-20" />
                    <p className="font-serif text-lg">
                      Seu texto estruturado aparecera aqui
                    </p>
                  </div>
                )}
              </div>

              <div className="p-4 border-t border-fio-border bg-fio-paperDark flex flex-wrap items-center gap-6 text-sm">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <span
                    className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                      sepRefs
                        ? 'bg-fio-teal border-fio-teal text-white'
                        : 'border-fio-border bg-white group-hover:border-fio-teal'
                    }`}
                  >
                    {sepRefs && <Check className="w-3.5 h-3.5" />}
                  </span>
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={sepRefs}
                    onChange={() => setSepRefs(!sepRefs)}
                  />
                  <span className="text-fio-text group-hover:text-fio-teal transition-colors flex items-center gap-1.5">
                    <BookMarked className="w-4 h-4 text-fio-textLight" />
                    Referencias em arquivo separado
                  </span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer group">
                  <span
                    className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                      hasImages
                        ? 'bg-fio-teal border-fio-teal text-white'
                        : 'border-fio-border bg-white group-hover:border-fio-teal'
                    }`}
                  >
                    {hasImages && <Check className="w-3.5 h-3.5" />}
                  </span>
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={hasImages}
                    onChange={() => setHasImages(!hasImages)}
                  />
                  <span className="text-fio-text group-hover:text-fio-teal transition-colors flex items-center gap-1.5">
                    <ImageIcon className="w-4 h-4 text-fio-textLight" /> Aula
                    possui imagens/tabelas
                  </span>
                </label>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button
                size="lg"
                onClick={handleProcess}
                disabled={text.trim().length === 0}
                className="w-full sm:w-auto"
              >
                Processar documento
              </Button>
              <Button
                variant="ghost"
                onClick={() => setText('')}
                disabled={text.length === 0}
              >
                Limpar
              </Button>
            </div>
          </div>

          <div className="lg:col-span-4 sticky top-24">
            <div className="bg-white rounded-2xl shadow-card border border-fio-border overflow-hidden">
              <div className="h-2 bg-fio-sand" />
              <div className="p-6">
                <h3 className="font-serif text-lg text-fio-text mb-4">
                  Regras essenciais
                </h3>
                <p className="text-sm text-fio-textLight mb-6">
                  O FioVoz aplicara automaticamente as seguintes adaptacoes ao
                  seu texto:
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    'Expandir e sonorizar siglas',
                    'Adaptar citacoes para leitura',
                    'Remover paginacao solta',
                    'Tratar notas de rodape',
                    'Orientar descricoes de imagens',
                    'Separar bibliografia',
                  ].map((rule) => (
                    <li
                      key={rule}
                      className="flex items-center gap-3 text-sm text-fio-text"
                    >
                      <div className="w-5 h-5 rounded-full bg-fio-sage/20 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-fio-sage" />
                      </div>
                      {rule}
                    </li>
                  ))}
                </ul>

                <div className="bg-fio-sand/10 border border-fio-sand/20 rounded-xl p-4 flex gap-3 items-start">
                  <Shield className="w-5 h-5 text-fio-sand shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-fio-text text-sm mb-1">
                      Conteudo preservado
                    </h4>
                    <p className="text-xs text-fio-textLight leading-relaxed">
                      O conteudo original e preservado integralmente. Nenhuma
                      palavra do autor e alterada, apenas a estrutura de leitura
                      e adaptada para o locutor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
