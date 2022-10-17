import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar';
import Gif from './Pages/Gif/Gif';
import Stiker from './Pages/Stiker/Stiker';
import Home from './Pages/Home/Home';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
         <Routes>
           <Route path='/' element={ <Home  /> } >
              <Route path='/gif' element={ <Gif  /> } />
              <Route path='/stikers' element={ <Stiker /> } />
           </Route>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
