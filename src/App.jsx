import './styles/App.css'
import Header from './components/Header.jsx'
import Entry from './components/Entry.jsx'
import data from './data.js'

function App() {
    const entries = data.map((entry) => {
        return <Entry key={entry.id} img={entry.img} title={entry.title} country={entry.country}
          googleMapsLink={entry.googleMapsLink}
          dates={entry.dates}
          text={entry.text}
      />
    })
  return (
    <>
      <Header />
      {entries}
    </>
  )
}

export default App
