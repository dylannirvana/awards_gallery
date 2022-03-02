import logo from './logo.svg';
import './App.css';
import Gallery from "react-photo-gallery";
import { photos } from "./photos";


function App() {
  const BasicRows = () => <Gallery photos={photos} />;

  return (
    <div className="App">

      <BasicRows />

    </div>
  );
}

export default App;
