import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { proxyUrl } from '../config'
import Routes from './Routes'

const App = () => <>
  <a 
    href={`${proxyUrl}/logout`} 
    rel="noopener noreferrer"
  >
    log out
  </a>
  <a 
    href={`${proxyUrl}/authorize?starting_url=${window.location.href}`} 
    rel="noopener noreferrer"
  >
    log in
  </a>
  <BrowserRouter>
    <Routes/>
  </BrowserRouter>
</>

export default App