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

  localStorage.setItem('counter', JSON.stringify(1))



  useEffect(() => {
    fetchData()
    .then(
      d => {
        setCurrencies(d) 
       
       })
    .catch(console.log)
  }, [])


  console.log(currencies)
  if(currencies){
  localStorage.setItem('currencies', JSON.stringify(currencies))
  }


  return (
    <Router>
      <div className='App'>
        <nav>
          <NavLink className='navLink' to='/' id="homeNav">
            Home
          </NavLink>
        </nav>
        <div className='wrapper'id="snackbar"><div id='snackBarText'>Click Here To Install CoinView</div><div className='close' onClick={close}></div></div>

        <Switch>
          <Route exact path='/'>
          <img src='./coin.png' alt='Leaf' id='mainImage' />
          <CurrencyList currencies={currencies} showSnackBar={showSnackBar} close={close} installApp={installApp}/>
          {console.log("home")}
          </Route>

          <Route path="/details/:nameid">
            <Details currencies={currencies} />
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


let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  console.log("Before install prompt called")
  //Prevent chrome 67 and earlier from automatically showing the prompt
  e.preventDefault()
  deferredPrompt = e;



  //showSnackBar();
})

function showSnackBar() {
  var snackbar = document.getElementById("snackbar");
  snackbar.className = "show";
  let snackBarText = document.getElementById("snackBarText");
  snackBarText.addEventListener("click", installApp);
 // setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function close() {
  console.log('close');
  var snackbar = document.getElementById("snackbar");
  snackbar.className = "";
}

function installApp() {

  var snackbar = document.getElementById("snackbar");

  // Show the prompt
  deferredPrompt.prompt();


  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice.then(choiceResult => {
    if (choiceResult.outcome === "accepted") {
      console.log("PWA setup accepted");
      close();
    } else {
      console.log("PWA setup rejected");

    }
  
    deferredPrompt = null;
  });
}
