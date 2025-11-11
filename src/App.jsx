import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Commitment from './components/Commitment'
import Story from './components/Story'
import Products from './components/Products'
import Reviews from './components/Reviews'
import DidYouKnow from './components/DidYouKnow'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  return (
    <div>
      <Nav />
      <main>
        <Hero />
        <Commitment />
        <Story />
        <Products />
        <Reviews />
        <DidYouKnow />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
