import { MetaProvider, Title } from '@solidjs/meta'
import { Router, Routes, Route } from '@solidjs/router'

import Layout from 'components/Layout'

import Home from 'pages/home'
import Portfolio from 'pages/portfolio/index'
import Sale from 'pages/portfolio/sale'
import HighHeel from 'pages/portfolio/high-heel'
import MidHeel from 'pages/portfolio/mid-heel'
import LowHeel from 'pages/portfolio/low-heel'
import Product from 'pages/portfolio/product'

import { lang } from 'store/lang'


export default function() {
  
  return (
    <MetaProvider>
      <div><Title>{ lang() }</Title></div>
      
      <Router>
        <Layout>
          <Routes>
            <Route path="/" component={ Home } />
            <Route path="/portfolio/" component={ Portfolio } />
            <Route path="/portfolio/sale" component={ Sale } />
            <Route path="/portfolio/low-heel" component={ LowHeel } />
            <Route path="/portfolio/mid-heel" component={ MidHeel } />
            <Route path="/portfolio/high-heel" component={ HighHeel } />
            <Route path="/portfolio/:id" component={ Product } />
          </Routes>
        </Layout>
      </Router>
    </MetaProvider>
  )
}
