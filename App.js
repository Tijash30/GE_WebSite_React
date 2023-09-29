import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './routes/Home';
import Services from './routes/Services';
import Projects from './routes/Projects';
import About from './routes/About';
import Corporativos from './components/geservices/Corporativos';
import Comercial from './components/geservices/Comercial';
import Residencial from './components/geservices/Residencial';

import Cloe from './components/geprojects/comerciales/Cloe';
import Tapalpa from './components/geprojects/residenciales/Tapalpa';
import Piso22 from './components/geprojects/corporativos/Piso22';
import SanCristobal from './components/geprojects/residenciales/SanCristobal';
import Lobfootwear from './components/geprojects/comerciales/Lob_footwear';
import Piso20 from './components/geprojects/corporativos/Piso20';
import Stratech from './components/geprojects/corporativos/Stratech';
import Piso23 from './components/geprojects/corporativos/Piso23';


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/service' element={<Services/>} />
                <Route path='/projects' element={<Projects/>} />
                <Route path='/about' element={<About/>} />
                <Route path='service/corporativos' element={<Corporativos/>} />
                <Route path='service/comerciales' element={<Comercial/>} />
                <Route path='service/residenciales' element={<Residencial/>} />
                {/*Sección de páginas de proyectos*/}
                <Route path='projects/cloe' element={<Cloe/>} />
                <Route path='projects/tapalpa' element={<Tapalpa />} />
                <Route path='projects/piso22' element={<Piso22 />} />
                <Route path='projects/san_cristobal' element={<SanCristobal />} />
                <Route path='projects/lob_footwear' element={<Lobfootwear />} />
                <Route path='projects/piso20' element={<Piso20 />} />
                <Route path='projects/stratech' element={<Stratech />} />
                <Route path='projects/piso23' element={<Piso23 />} />
            </Routes>
        </div>
    );
}

export default App;


/**
 * 
 *  MANIFEST.JSON
 * 
 * esta parte son todos los datos que iban en realidad
 * en este archivo, borré toda la parte de icons.
 * 
 * {
  "short_name": "React App",
  "name": "Create React App Sample",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}
 * 
 * 
 */

