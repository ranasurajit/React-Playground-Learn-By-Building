import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App.jsx';
import { ProductCartContextProvider } from './contexts/ProductCartContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductCartContextProvider>
      <App />
    </ProductCartContextProvider>
  </StrictMode>,
);
