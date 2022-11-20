import { Router, Routes, Route } from '@solidjs/router'

import Layout from 'components/Layout'

import { Home } from 'pages/Home'
import { Guide } from 'pages/Guide'

import { lang } from 'store/lang'


export default function() {
  
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/home" component={ Home } />
          <Route path="/guide" component={ Guide } />
        </Routes>
      </Layout>

      <h1>{ lang() }</h1>
    </Router>
  )
}
