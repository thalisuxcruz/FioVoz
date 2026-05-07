import { useEffect, useState } from 'react'
import { Footer, TopBar, ViewState } from './components/Shared'
import { Landing } from './pages/Landing'
import { Onboarding } from './pages/Onboarding'
import { Result } from './pages/Result'
import { Rules } from './pages/Rules'
import { Workspace } from './pages/Workspace'

export function App() {
  const [currentView, setCurrentView] = useState<ViewState>('landing')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentView])

  const renderView = () => {
    switch (currentView) {
      case 'landing':
        return <Landing onViewChange={setCurrentView} />
      case 'onboarding':
        return <Onboarding onViewChange={setCurrentView} />
      case 'workspace':
        return <Workspace onViewChange={setCurrentView} />
      case 'result':
        return <Result onViewChange={setCurrentView} />
      case 'rules':
        return <Rules onViewChange={setCurrentView} />
      default:
        return <Landing onViewChange={setCurrentView} />
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-fio-paper font-sans text-fio-text selection:bg-fio-sandLight selection:text-fio-teal">
      <TopBar currentView={currentView} onViewChange={setCurrentView} />
      <main className="flex-1 flex flex-col">{renderView()}</main>
      <Footer />
    </div>
  )
}
