import Header from './components/Header';
import Card from './components/Card';
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <section className='cards-list'>
        <Card />
      </section>
    </div>
  )
}

export default App
