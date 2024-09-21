// import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Header/Navbar';
import Mainsection from './Component/Herosection/Mainsection';
import Middelsection from './Component/Midsection/Middelsection';
import Contentsection from './Component/Contentsection/Contectsection';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Mainsection />
      <Middelsection />
      <Contentsection />
      <Footer />
    </div>
  );
}

export default App;
