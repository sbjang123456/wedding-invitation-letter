import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './scss/global.scss';
import { ModalContext } from '@/contexts/ModalContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ModalContext>
      <App />
    </ModalContext>
  </React.StrictMode>,
);
