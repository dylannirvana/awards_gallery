// import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './Footer';
import Grid from './Grid';
import Header from './Header';
import Parse from './parse';


function App() {
  return (
  <div>
     <div className='outerContainer'>
     <Header />
      <div className="App">
        {/* <Grid /> */}
       </div>
    </div>
    <Parse />
    <Footer />

  </div>
  );
}

export default App;
