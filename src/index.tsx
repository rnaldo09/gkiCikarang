import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Custom.css';

import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Homepage from './views/homepage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  </BrowserRouter>
);

