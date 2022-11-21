import { Router, Routes, Route } from '@solidjs/router'

import Layout from 'components/Layout'

import Home from 'pages/home'
import { Guide } from 'pages/Guide'
import Portfolio from 'pages/portfolio'

import { lang } from 'store/lang'


export default function() {
  
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" component={ Home } />
          <Route path="/guide" component={ Guide } />
          <Route path="/portfolio" component={ Portfolio } />
        </Routes>
      </Layout>

      <h1>{ lang() }</h1>
    </Router>
  )
}
