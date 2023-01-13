import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/sites/assets/styles/reset.scss'
import '@/sites/assets/styles/md-style.scss'
import App from './App'

ReactDOM.createRoot(document.getElementById('doc') as HTMLElement)
        .render(<App />)
