import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import RenderTest from './RenderTest.tsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <App />
    <RenderTest />
  </React.StrictMode>,
)



