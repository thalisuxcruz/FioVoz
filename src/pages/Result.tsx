import {
  AlertTriangle,
  CheckCircle2,
  Copy,
  Download,
  FileAudio,
  Info,
  RefreshCcw,
} from 'lucide-react'
import { Button, ViewState } from '../components/Shared'

export const Result = ({
  onViewChange,
}: {
  onViewChange: (v: ViewState) => void
}) => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-fio-paperDark py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="flex items-center gap-2 bg-fio-sage text-white px-4 py-2 rounded-full font-medium shadow-sm">
            <CheckCircle2 className="w-5 h-5" />
            Pronto para audiobook
          </div>
          {['Siglas expandidas', 'Citações adaptadas', 'Bibliografia separada'].map(
            (label) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white border border-fio-border text-fio-textLight px-3 py-1.5 rounded-full text-sm"
              >
                <span className="w-2 h-2 rounded-full bg-fio-teal" />
                {label}
              </div>
            ),
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl shadow-card border border-fio-border p-8 md:p-12">
              <div className="max-w-2xl mx-auto">
                <div>
                  <h1 className="font-serif text-3xl text-fio-text mb-8">
                    A Vigilância Epidemiológica no Brasil
                  </h1>

                  <div className="font-serif text-lg leading-[1.8] text-fio-text space-y-6">
                    <p>
                      A vigilância epidemiológica no Brasil tem sido fundamental
                      para o controle de doenças, conforme aponta Silva, no ano
                      de 2021.
                    </p>
                    <p>
                      Segundo o Ministério da Saúde, abre aspas, a notificação
                      compulsória é o principal instrumento, fecha aspas.
                    </p>
                    <p>
                      A Organização Mundial da Saúde estabelece diretrizes
                      globais para o monitoramento.
                    </p>

                    <div className="bg-fio-sand/10 border-l-4 border-fio-sand p-4 my-6 rounded-r-lg">
                      <p className="text-sm font-mono text-fio-textLight m-0 flex items-start gap-2">
                        <Info className="w-4 h-4 text-fio-sand shrink-0 mt-0.5" />
                        <span>
                          [Aviso ao locutor: Inserir aqui a audiodescrição da
                          Figura 1 - Mapa de Casos de Dengue em 2022. O roteiro
                          de descrição deve ser fornecido pela equipe de
                          acessibilidade.]
                        </span>
                      </p>
                    </div>

                    <p>
                      O Sistema Único de Saúde atua na ponta, garantindo
                      atendimento. Como aponta Oliveira, no ano de 2019:
                    </p>
                    <p className="pl-6 border-l-2 border-fio-teal/30 italic text-fio-textLight">
                      Abre citação em destaque: A capilaridade do sistema
                      permite respostas rápidas a surtos locais. Fecha citação
                      em destaque.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6 sticky top-24">
            <div className="bg-white rounded-2xl shadow-card border border-fio-border p-6 flex flex-col gap-3">
              <Button
                className="w-full justify-center"
                icon={<Copy className="w-4 h-4" />}
              >
                Copiar texto adaptado
              </Button>
              <Button
                variant="outline"
                className="w-full justify-center"
                icon={<Download className="w-4 h-4" />}
              >
                Exportar (.docx)
              </Button>
              <div className="h-px bg-fio-border my-2" />
              <Button
                variant="ghost"
                className="w-full justify-center text-fio-textLight"
                onClick={() => onViewChange('workspace')}
                icon={<RefreshCcw className="w-4 h-4" />}
              >
                Revisar outro documento
              </Button>
            </div>

            <div className="bg-white rounded-2xl shadow-card border border-fio-border overflow-hidden">
              <div className="p-4 border-b border-fio-border bg-fio-paper">
                <h3 className="font-serif font-medium text-fio-text flex items-center gap-2">
                  <FileAudio className="w-4 h-4 text-fio-teal" />O que foi
                  aplicado
                </h3>
              </div>
              <div className="p-4 space-y-3">
                {[
                  ['Siglas expandidas', '3'],
                  ['Citações adaptadas', '2'],
                  ['Imagens com orientação', '1'],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex justify-between items-center text-sm"
                  >
                    <span className="text-fio-textLight">{label}</span>
                    <span className="font-medium text-fio-teal bg-fio-teal/10 px-2 py-0.5 rounded">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-fio-sand/10 border border-fio-sand/30 rounded-2xl p-5">
              <h4 className="font-medium text-fio-text text-sm mb-3 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-fio-sand" />
                Avisos importantes
              </h4>
              <ul className="space-y-3 text-xs text-fio-textLight leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-fio-sand">•</span>
                  As referências bibliográficas foram extraídas e devem ser
                  gravadas em um arquivo de áudio separado, conforme padrão
                  Fiocruz.
                </li>
                <li className="flex gap-2">
                  <span className="text-fio-sand">•</span>
                  Uma imagem foi detectada. Certifique-se de que a equipe de
                  acessibilidade forneceu o roteiro de audiodescrição.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
