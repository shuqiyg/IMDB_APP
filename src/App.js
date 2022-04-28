import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar  from './components/Navbar';
import Home from './pages/Home';
import Movies from './pages/Movies'
import TvShows from './pages/TvShows'
import Celebs from './pages/Celebs'
import Upcoming from './pages/Upcoming'
import Contact from './pages/Contact'


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/Movies' element={<Movies />} />
          <Route path='/TvShows' element={<TvShows />} />
          <Route path='/Celebs' element={<Celebs/>} />
          <Route path='/Upcoming' element={<Upcoming />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </Router>     
    </>
  );
}

export default App;
