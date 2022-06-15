import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Body from './Components/Body';
import ScrollButton from './Components/ScrollUp';

function App() {
  return (
    <div className="App">
      <div>
      </div>
      <Header />
      <Body />
      <ScrollButton />
      <Footer />
    </div>
  );
}

export default App;