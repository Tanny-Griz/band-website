import './styles/App.css'
import { FooterSection } from './layout/footer/FooterSection'
import { HeaderSection } from './layout/header/HeaderSection'
import { PageBackground } from './layout/page-background/PageBackground'
import { HeroSection } from './sections/hero/HeroSection'
import { LatestReleaseSection } from './sections/latest-release/LatestReleaseSection'

function App() {
  return (
    <div className="app">
      <PageBackground />
      <HeaderSection />
      <main className="app-main">
        <HeroSection />
        <LatestReleaseSection />
      </main>
      <FooterSection />
    </div>
  )
}

export default App
