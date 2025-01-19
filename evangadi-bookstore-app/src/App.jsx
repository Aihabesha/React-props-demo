import React, { Component } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Products from './components/Products/Products'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Products/>
        <Footer/>
      </div>
    )
  }
}
