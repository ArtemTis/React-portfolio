import './styles/main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Progects from './pages/Progects';
import Contacts from './pages/Contacts';
import Project from './pages/Project';
import ScrollToTop from './utils/scrollToTop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Progects />} />
          <Route path='/project/:id' element={<Project />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='*' element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
