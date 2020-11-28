import logo from './logo.svg'
import './App.css'
import { Button, Card, Row, Col, CardTitle } from 'react-materialize'
import 'materialize-css'
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from 'react-router-dom'
import Details from './components/Details'
import CurrencyList from './components/CurrencyList'
import React, { useEffect, useState } from 'react';

function App () {


  const [currencies, setCurrencies] = useState()


  useEffect(() => {
    fetchData()
    .then(
      d => {
        setCurrencies(d)  
       })
    .catch(console.log)
  }, [])


  console.log(currencies)



  return (
    <Router>
      <div className='App'>
        <nav>
          <NavLink className='navLink' to='/'>
            Home
          </NavLink>
          <NavLink className='navLink' to='/details'>
            Details
          </NavLink>
        </nav>

        <Switch>
          <Route exact path='/'>
          <img src='./coin.png' alt='Leaf' id='mainImage' />
          <CurrencyList currencies={currencies} />
          </Route>

          <Route exact path='/details'>
            <Details  />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App

export async function fetchData() {
  const url = "https://api.coinlore.net/api/tickers/"
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const data = await response.json()
  return data
}