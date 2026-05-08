import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import {
  Accessibility,
  ArrowRight,
  BookOpen,
  Eye,
  FileText,
  Image as ImageIcon,
} from 'lucide-react'
import { BrandGlyph, ViewState } from '../components/Shared'

export const Onboarding = ({
  onViewChange,
}: {
  onViewChange: (v: ViewState) => void
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
  }

  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center py-12 px-6 bg-fio-paper">
      <div className="max-w-3xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-8 shadow-card border border-fio-border mb-12 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-fio-teal" />
          <div className="w-16 h-16 mx-auto mb-6 bg-fio-paperDark rounded-full flex items-center justify-center border-4 border-white shadow-sm">
            <BrandGlyph className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-serif text-fio-text mb-4">
            Olá! Eu sou o FioVoz Brasília.
          </h1>
          <p className="text-lg text-fio-textLight max-w-2xl mx-auto leading-relaxed">
            Transformo documentos de aula em texto corrido, pronto para narração
            e produção de audiobooks.
            <strong className="text-fio-text font-medium">
              {' '}
              Eu preservo integralmente o conteúdo original
            </strong>
            , apenas organizo a leitura para garantir máxima acessibilidade.
          </p>
          <p className="mt-6 text-fio-teal font-medium">
            Escolha uma opção para começar:
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
        >
          <ActionCard
            primary
            icon={<FileText className="w-6 h-6 text-white" />}
            title="Enviar texto de uma aula"
            body="Cole seu documento e deixe-me prepará-lo para áudio."
            onClick={() => onViewChange('workspace')}
            variants={itemVariants}
          />
          <ActionCard
            icon={<Eye className="w-6 h-6 text-fio-teal" />}
            title="Ver exemplo pronto"
            body="Veja como fica um documento após a adaptação."
            onClick={() => onViewChange('result')}
            variants={itemVariants}
          />
          <ActionCard
            icon={<BookOpen className="w-6 h-6 text-fio-teal" />}
            title="Ver regras de adaptação"
            body="Entenda os critérios de acessibilidade aplicados."
            onClick={() => onViewChange('rules')}
            variants={itemVariants}
          />
          <ActionCard
            icon={<ImageIcon className="w-6 h-6 text-fio-teal" />}
            title="Imagens e tabelas"
            body="Como o FioVoz orienta a descrição de elementos visuais."
            onClick={() => onViewChange('rules')}
            variants={itemVariants}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 text-xs font-medium text-fio-textLight"
        >
          <div className="flex items-center gap-1.5 bg-fio-paperDark px-3 py-1.5 rounded-full border border-fio-border">
            <Accessibility className="w-3.5 h-3.5" /> WCAG-friendly
          </div>
          <div className="flex items-center gap-1.5 bg-fio-paperDark px-3 py-1.5 rounded-full border border-fio-border">
            <Eye className="w-3.5 h-3.5" /> Leitura ampliada suportada
          </div>
          <div className="flex items-center gap-1.5 bg-fio-paperDark px-3 py-1.5 rounded-full border border-fio-border">
            <div className="w-3.5 h-3.5 rounded-full bg-black border border-white" />
            Alto contraste disponível
          </div>
        </motion.div>
      </div>
    </div>
  )
}

const ActionCard = ({
  primary = false,
  icon,
  title,
  body,
  onClick,
  variants,
}: {
  primary?: boolean
  icon: ReactNode
  title: string
  body: string
  onClick: () => void
  variants: Record<string, unknown>
}) => (
  <motion.button
    variants={variants}
    onClick={onClick}
    className={`group text-left p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border ${
      primary
        ? 'bg-fio-teal text-white border-transparent'
        : 'bg-white border-fio-border'
    }`}
  >
    <div className="flex justify-between items-start mb-4">
      <div
        className={`p-3 rounded-lg ${primary ? 'bg-white/20' : 'bg-fio-paperDark'}`}
      >
        {icon}
      </div>
      <ArrowRight
        className={`w-5 h-5 group-hover:opacity-100 group-hover:translate-x-1 transition-all ${
          primary ? 'opacity-50' : 'text-fio-textLight opacity-0'
        }`}
      />
    </div>
    <h3
      className={`font-serif text-xl mb-2 ${primary ? '' : 'text-fio-text'}`}
    >
      {title}
    </h3>
    <p className={`text-sm ${primary ? 'text-white/80' : 'text-fio-textLight'}`}>
      {body}
    </p>
  </motion.button>
)
