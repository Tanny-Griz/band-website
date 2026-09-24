import './App.css'
import { BandInfo } from './components/BandInfo'
import { TourInfo } from './components/TourInfo'
import { VenueInfo } from './components/VenueInfo'

function App() {
  return (
    <main className="app">
      <h1>Band Website</h1>
      <BandInfo />
      <TourInfo />
      <VenueInfo />
    </main>
  )
}

export default App
