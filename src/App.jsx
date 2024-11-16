import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';

import { Home, Services, Works, Portfolio, Contact } from './pages';
// import Navbar from './components/navbar/Navbar';
import { fromJSON } from 'postcss';

const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/works' element={<Works />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App