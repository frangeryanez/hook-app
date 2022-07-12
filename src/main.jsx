import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HooksApp } from './HooksApp';
// import { CounterApp } from './useState/CounterApp';
// import { CounterWithCustomHook } from './useState/CounterWithCustomHook';
// import { SimpleForm } from './useEffect/SimpleForm';
// import { FormWithCustomHook } from './useEffect/FormWithCustomHook';
import { MultipleCustomHooks } from './examples/MultipleCustomHooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MultipleCustomHooks />
  </React.StrictMode>
);