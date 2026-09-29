import './styles/App.css'
import { FooterSection } from './layout/footer/FooterSection'
import { HeaderSection } from './layout/header/HeaderSection'
import { PageBackground } from './layout/page-background/PageBackground'
import { HeroSection } from './sections/hero/HeroSection'
import { LatestReleaseSection } from './sections/latest-release/LatestReleaseSection'
import { ShowsSection } from './sections/shows/ShowsSection'

function App() {
  return (
    <div className="app">
      <PageBackground />
      <HeaderSection />
      <main className="app-main">
        <HeroSection />
        <LatestReleaseSection />
        <ShowsSection />
      </main>
      <FooterSection />
    </div>
  )
}

export default App
