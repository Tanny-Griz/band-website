import './styles/App.css'
import { FooterSection } from './layout/footer/FooterSection'
import { HeaderSection } from './layout/header/HeaderSection'
import { HeroSection } from './sections/hero/HeroSection'

function App() {
  return (
    <div className="app">
      <HeaderSection />
      <main className="app-main">
        <HeroSection />
      </main>
      <FooterSection />
    </div>
  )
}

export default App
