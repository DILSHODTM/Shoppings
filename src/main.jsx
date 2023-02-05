import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {render} from 'react-dom'
import {ThemeProvider} from './globalComponents/ThemeProvider'
import './index.css'






ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>

)
