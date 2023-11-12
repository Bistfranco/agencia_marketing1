import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import store from './store';
import { Provider } from 'react-redux';
import Error404 from 'containers/errors/Error404';
import Home from 'containers/pages/home';
import Cases from 'containers/pages/Cases';
import Services from 'containers/pages/Services';
import About from 'containers/pages/About';
import Careers from 'containers/pages/Careers';
import Contact from 'containers/pages/Contact';
import Blog from 'containers/pages/blog';

function App() {
  return (
    
    <Provider store={store}>
      <Router>
        <Routes>

          {/* Error */}
          <Route path='*' element={<Error404 />} />

          {/* Home */}
          <Route path='/' element={<Home />} />
          <Route path='/casos' element={<Cases />} />
          <Route path='/servicios' element={<Services />} />
          <Route path='/nosotros' element={<About />} />
          <Route path='/carreras' element={<Careers />} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/contacto' element={<Contact />} />

        </Routes>
      </Router>

    </Provider>
  
    );
}

export default App;
