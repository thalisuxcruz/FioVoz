import { forwardRef } from 'react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Shield } from 'lucide-react'

export type ViewState =
  | 'landing'
  | 'onboarding'
  | 'workspace'
  | 'result'
  | 'rules'

export const BrandGlyph = ({
  className = 'w-8 h-8',
}: {
  className?: string
}) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <rect width="32" height="32" rx="16" className="fill-fio-teal" />
    <path
      d="M11 10C11 8.89543 11.8954 8 13 8H19C20.1046 8 21 8.89543 21 10V22C21 23.1046 20.1046 24 19 24H13C11.8954 24 11 23.1046 11 22V10Z"
      className="fill-fio-paper opacity-20"
    />
    <path d="M13 8H17V24H13V8Z" className="fill-fio-paper" />
    <path
      d="M13 14H19"
      stroke="#FAFAF7"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M13 18H17"
      stroke="#FAFAF7"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M24 12C25.5 13.5 25.5 18.5 24 20"
      stroke="#C9A961"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M27 9C29.5 11.5 29.5 20.5 27 23"
      stroke="#C9A961"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.5"
    />
  </svg>
)

export const TopBar = ({
  currentView,
  onViewChange,
}: {
  currentView: ViewState
  onViewChange: (v: ViewState) => void
}) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-fio-paper/90 backdrop-blur-md border-b border-fio-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          type="button"
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => onViewChange('landing')}
          aria-label="Ir para o início"
        >
          <BrandGlyph />
          <span className="font-serif font-medium text-lg tracking-tight text-fio-teal group-hover:text-fio-tealLight transition-colors">
            FioVoz Brasília
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => onViewChange('landing')}
            className={`text-sm font-medium transition-colors ${
              currentView === 'landing'
                ? 'text-fio-teal'
                : 'text-fio-textLight hover:text-fio-teal'
            }`}
          >
            Início
          </button>
          <button
            onClick={() => onViewChange('rules')}
            className={`text-sm font-medium transition-colors ${
              currentView === 'rules'
                ? 'text-fio-teal'
                : 'text-fio-textLight hover:text-fio-teal'
            }`}
          >
            Critérios de preparação
          </button>
          <button
            onClick={() => onViewChange('result')}
            className={`text-sm font-medium transition-colors ${
              currentView === 'result'
                ? 'text-fio-teal'
                : 'text-fio-textLight hover:text-fio-teal'
            }`}
          >
            Exemplo
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => onViewChange('onboarding')}
            className="hidden md:flex text-sm font-medium text-fio-teal hover:text-fio-tealLight transition-colors"
          >
            Entrar
          </button>
          <Button
            onClick={() => onViewChange('workspace')}
            variant="primary"
            size="sm"
          >
            Preparar aula
          </Button>
        </div>
      </div>
      <div className="bg-fio-teal text-fio-paper text-xs py-1.5 px-6 text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <Shield className="w-3 h-3 text-fio-sand" />
        Um projeto do Núcleo de Educação a Distância – Fiocruz Brasília
      </div>
    </header>
  )
}

export const Footer = () => (
  <footer className="bg-fio-paperDark border-t border-fio-border py-12 mt-auto">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center gap-2 mb-4">
          <BrandGlyph className="w-6 h-6 grayscale opacity-80" />
          <span className="font-serif font-medium text-fio-text">
            FioVoz Brasília
          </span>
        </div>
        <p className="text-sm text-fio-textLight max-w-sm leading-relaxed">
          Transformando documentos educacionais em formatos acessíveis para
          narração e produção de audiobooks, preservando a integridade do
          conteúdo original.
        </p>
      </div>
      <div>
        <h4 className="font-serif font-medium mb-4 text-fio-text">
          Acessibilidade
        </h4>
        <ul className="space-y-2 text-sm text-fio-textLight">
          <li>Declaração de Acessibilidade</li>
          <li>Diretrizes WCAG 2.1</li>
          <li>Alto Contraste</li>
        </ul>
      </div>
      <div>
        <h4 className="font-serif font-medium mb-4 text-fio-text">
          Institucional
        </h4>
        <ul className="space-y-2 text-sm text-fio-textLight">
          <li>Fiocruz Brasília</li>
          <li>Núcleo de Educação a Distância</li>
          <li>Contato e Suporte</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-fio-border/50 flex flex-col md:flex-row items-center justify-between text-xs text-fio-textLight">
      <p>
        © {new Date().getFullYear()} Fiocruz Brasília. Todos os direitos
        reservados.
      </p>
      <p className="mt-2 md:mt-0">
        Desenvolvido para a educação pública e inclusiva.
      </p>
    </div>
  </footer>
)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  icon?: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = '',
      variant = 'primary',
      size = 'md',
      icon,
      children,
      ...props
    },
    ref,
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fio-teal disabled:opacity-50 disabled:cursor-not-allowed'
    const variants = {
      primary:
        'bg-fio-teal text-white hover:bg-fio-tealLight shadow-sm hover:shadow',
      secondary: 'bg-fio-sand text-fio-text hover:bg-fio-sandLight shadow-sm',
      outline:
        'border border-fio-border text-fio-text hover:bg-fio-paperDark hover:border-fio-textLight',
      ghost: 'text-fio-teal hover:bg-fio-teal/5',
    }
    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-5 py-2.5 text-sm',
      lg: 'px-6 py-3 text-base',
    }

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
        {icon && <span className="ml-1">{icon}</span>}
      </button>
    )
  },
)

Button.displayName = 'Button'
