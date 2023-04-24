import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from '@ui5/webcomponents-react'

import reportWebVitals from './reportWebVitals'
import Router from './routes/routes.jsx'
import GlobalStyles from './styles/globalStyles'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <ThemeProvider>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    <GlobalStyles />
  </ThemeProvider>
)

reportWebVitals()
