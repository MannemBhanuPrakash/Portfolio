import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />

      </Routes>
    </BrowserRouter>
  )
}

