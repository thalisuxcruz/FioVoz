import { useEffect, useState } from 'react'
import {
  AlertTriangle,
  CheckCircle2,
  Copy,
  Download,
  FileAudio,
  RefreshCcw,
  Volume2,
} from 'lucide-react'
import { Button, ViewState } from '../components/Shared'

const preparedResultText = `A vigilância epidemiológica no Brasil tem sido fundamental para o controle de doenças, conforme aponta Silva, no ano de 2021.

Segundo o Ministério da Saúde, abre aspas, a notificação compulsória é o principal instrumento, fecha aspas.

A Organização Mundial da Saúde estabelece diretrizes globais para o monitoramento.

O Sistema Único de Saúde atua na ponta, garantindo atendimento. Como aponta Oliveira, no ano de 2019:

Abre citação em destaque: A capilaridade do sistema permite respostas rápidas a surtos locais. Fecha citação em destaque.`

export const Result = ({
  onViewChange,
}: {
  onViewChange: (v: ViewState) => void
}) => {
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [audioStatus, setAudioStatus] = useState(
    'Ouça uma prévia do texto preparado usando a voz disponível no navegador.',
  )

  useEffect(() => {
    return () => {
      window.speechSynthesis?.cancel()
    }
  }, [])

  const handleAudioPreview = () => {
    if (!preparedResultText.trim()) {
      return
    }

    if (isSpeaking) {
      window.speechSynthesis?.cancel()
      setIsSpeaking(false)
      setAudioStatus('Prévia finalizada.')
      return
    }

    if (!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined') {
      setAudioStatus('Seu navegador não oferece suporte à prévia em áudio.')
      return
    }

    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(preparedResultText)
    utterance.lang = 'pt-BR'
    utterance.rate = 0.95
    utterance.onstart = () => {
      setIsSpeaking(true)
      setAudioStatus('Reproduzindo prévia em áudio.')
    }
    utterance.onend = () => {
      setIsSpeaking(false)
      setAudioStatus('Prévia finalizada.')
    }
    utterance.onerror = () => {
      setIsSpeaking(false)
      setAudioStatus('Seu navegador não oferece suporte à prévia em áudio.')
    }

    window.speechSynthesis.speak(utterance)
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(preparedResultText)
      setAudioStatus('Texto preparado copiado.')
    } catch {
      setAudioStatus('Não foi possível copiar o texto preparado.')
    }
  }

  return (
    <div className="min-h-[calc(100vh-64px)] bg-fio-paperDark py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="flex items-center gap-2 bg-fio-sage text-white px-4 py-2 rounded-full font-medium shadow-sm">
            <CheckCircle2 className="w-5 h-5" />
            Texto pronto para narração
          </div>
          {['Siglas preparadas', 'Citações adaptadas', 'Referências separadas'].map(
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
                onClick={handleCopy}
              >
                Copiar texto preparado
              </Button>
              <Button
                variant="outline"
                className="w-full justify-center"
                icon={<Volume2 className="w-4 h-4" />}
                onClick={handleAudioPreview}
                disabled={!preparedResultText.trim()}
                aria-label={
                  isSpeaking
                    ? 'Pausar prévia em áudio'
                    : 'Ouvir prévia em áudio do texto preparado'
                }
              >
                {isSpeaking ? 'Pausar áudio' : 'Ouvir prévia em áudio'}
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
                Preparar outro documento
              </Button>
              <div
                className="pt-1 text-xs leading-relaxed text-fio-textLight"
                aria-live="polite"
                role="status"
              >
                <p>{audioStatus}</p>
                <p className="mt-2">
                  A prévia usa a voz disponível no navegador. Revise o texto
                  antes de gravar ou publicar.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-card border border-fio-border overflow-hidden">
              <div className="p-4 border-b border-fio-border bg-fio-paper">
                <h3 className="font-serif font-medium text-fio-text flex items-center gap-2">
                  <FileAudio className="w-4 h-4 text-fio-teal" />
                  Preparação aplicada
                </h3>
              </div>
              <div className="p-4 space-y-3">
                {[
                  ['Siglas preparadas', '3'],
                  ['Citações adaptadas', '2'],
                  ['Referências separadas', '1'],
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
                  As referências bibliográficas devem ser tratadas em um
                  arquivo separado, conforme orientação do projeto.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
