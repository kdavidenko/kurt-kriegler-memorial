import Start from './Start';
import Slideshow from './Slideshow';
import './App.css';
import {Route, Routes } from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={ <Start /> }/>
          <Route path="/slideshow" element={ <Slideshow />} />
        </Routes>

    </div>
  );
}

export default App;
