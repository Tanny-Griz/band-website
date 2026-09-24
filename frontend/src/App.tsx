import './App.css'
import { BandInfo } from './components/BandInfo'
import { TourInfo } from './components/TourInfo'

function App() {
  return (
    <main className="app">
      <h1>Band Website</h1>
      <BandInfo />
      <TourInfo />
    </main>
  )
}

export default App
