import Header from './components/Header';
import Card from './components/Card';
import './App.css';
import data from './data';

function App() {
  let cards = data.map((item, ix, arr) => {
    return <Card key={ix} {...item} isLast={ix + 1 === arr.length} />;
  });
  return (
    <div>
      <Header />
      <section className='cards-list'>{cards}</section>
    </div>
  );
}

export default App;
