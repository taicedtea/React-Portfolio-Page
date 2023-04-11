import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutMe from './components/pages/AboutMe';
import Portfolio from './components/pages/Portfolio'

function App() {
  return (
    <div className="App">
        <Header />
        <Portfolio />
        <Footer />
    </div>
  );
}

export default App;
