
import './App.css';
import Navbar from './components/Navbar';
import MainBody from './components/MainBody';
import data from './data'

function App() {
  const cards = data.map(item => {
    return (
        <MainBody 
        Img = {item.Img}
        location = {item.location}
        view = {item.view}
        Name = {item.Name}
        startDate = {item.startDate}
        description = {item.description}
        endDate = {item.endDate}
        />
    )})
    console.log(cards)
  return (
    <div className="App">
        <Navbar/>
        {cards}

    </div>
  );
}

export default App;
