
import './App.css';
import Card from './components/Card';
import Cards from './components/Cards';
import Header from './components/Header';
import Label from './components/Label';
import Review from './components/Review';
import Reviews from './components/Reviews';

function App() {
  return (
    <div className="app">
      <Header />
      <Label />
      <Cards />
      <Card />
      <Reviews /> 
      <Review />
    </div>
  );
}

export default App;
