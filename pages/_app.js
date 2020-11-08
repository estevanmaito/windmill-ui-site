import React from 'react'
import { ThemeProvider } from '../context/ThemeContext'
import '../css/tailwind.css'

const App = ({ Component, pageProps }) => (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
)

export default App
