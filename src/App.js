import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <Nav />
      <div className="mt-12 lg:mt-24">
        <About />
      </div>
      <div className="mt-12 lg:mt-24">
        <Services />
      </div>
      <div className="mt-12 lg:mt-24">
        <Work />
      </div>
      <div className="mt-12 lg:mt-24">
        <Contact />
      </div>
      <div className='h-[4000px] lg:h-0'></div>
    </div>
  );
}

export default App;
