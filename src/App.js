import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import SearchPage from './SearchPage';


function App() {
  return (
   <div className='app'>
     <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/search" element={<SearchPage />} />
         </Routes>
           
     </BrowserRouter>

    </div>
  );
}

export default App;
