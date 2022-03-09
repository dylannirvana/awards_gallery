// import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './Footer';
import Grid from './Grid';
import Header from './Header';


function App() {
  return (
  <div>
     <div className='outerContainer'>
     <Header />
      <div className="App">
        <Grid />
       </div>
    </div>
    <Footer />

  </div>
  );
}

export default App;
