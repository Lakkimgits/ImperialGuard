import { useRef } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './assets/ScrollToTop.jsx';

import Home from './pages/HomePage.jsx'
import Layout from './pages/Layout.jsx'
import Ranks from './pages/Ranks.jsx'
import Paladins from './pages/PaladinsUnit.jsx'
import MountedSentinels from './pages/MountedSentinels.jsx'
import ScharfrichterOrder from './pages/ScharfrichterOrder.jsx'
import Gallery from './pages/Gallery.jsx'

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="Ranks" element={<Ranks/>} />
          <Route path="Paladins" element={<Paladins/>} />
          <Route path="MountedSentinels" element={<MountedSentinels/>} />
          <Route path="ScharfrichterOrder" element={<ScharfrichterOrder/>} />
          <Route path="Gallery" element={<Gallery/>} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App