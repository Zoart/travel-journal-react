import './App.css';
import Header from './components/header';
import Card from './components/card';
import cardsData from './data/data'
console.log(cardsData)

const cards = cardsData.map(
  item => {
    return (
      <Card
        key = {item.id}
        {...item}
      />
    )
  })

function App() {
  return (
    <div>
      < Header />
      <section className='cards'>
        {cards}
      </section>
    </div>
  )
}

export default App;
