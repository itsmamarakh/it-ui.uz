import './App.css';
import Main from './Main';
import News from './Pages/News/News';
import About from './Pages/About/About';

import {
  BrowserRouter as Router, 
  Routes, 
  Route,
  Link
} from 'react-router-dom';
import DLP from './Pages/Product/DLP/DLP';
import SIEM from './Pages/Product/SIEM/SIEM';
import Pentesing from './Pages/Product/Pentesing/Pentesing';


function App() {
  return (
    <div className="App">
       <Router>
           <Routes>
             <Route path='/' exact element={<Main/>}/>
             <Route path='/news' element={<News />} />
             <Route path='/about' element={<About />} />
             <Route path='/dlp' element={<DLP />} />
             <Route path='/siem' element={<SIEM />} />
             <Route path='/pentesing' element={<Pentesing/>} />
           </Routes>
      </Router>
    </div>
  );
}

export default App;
