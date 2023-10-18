import React from 'react'
import ReactDOM from 'react-dom/client'

import './global.css'
import Application from './ui/PageComponents/_application'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
)
