
/* import '../componens/../App.css' */
import { Button, Card, Row, Col, CardTitle } from 'react-materialize'
import {useParams} from 'react-router-dom'
import 'materialize-css'

function Details ({currencies}) {

  //If reloading page load last data
  if(!currencies){
    currencies = JSON.parse(localStorage.getItem('currencies'))
  }
    const { nameid } = useParams()
    console.log(nameid)

      let currentCurrency = currencies.data.filter(currency => currency.nameid == nameid)
    console.log(currentCurrency)  

  return (
    <div className='details'>
      <h4>{currentCurrency[0].name}</h4>
      <p>{JSON.stringify(currentCurrency[0].symbol).replace(/['"]+/g, '')}</p>
      <p> Rank: {JSON.stringify(currentCurrency[0].rank).replace(/['"]+/g, '')} </p>

      <p> Price {"$" + JSON.stringify(currentCurrency[0].price_usd).replace(/['"]+/g, '')}</p>
      <p> Market Cap {"$" + JSON.stringify(currentCurrency[0].market_cap_usd).replace(/['"]+/g, '')}</p>
        <p> 1h Change: {JSON.stringify(currentCurrency[0].percent_change_1h).replace(/['"]+/g, '')} %</p>
        <p> 24h Change: {JSON.stringify(currentCurrency[0].percent_change_24h).replace(/['"]+/g, '')} %</p>
        <p> 7 day Change: {JSON.stringify(currentCurrency[0].percent_change_7d).replace(/['"]+/g, '')} %</p>
        <p> BTC Price: {JSON.stringify(currentCurrency[0].price_btc).replace(/['"]+/g, '')} BTC</p>
        <p> Total Supply: {JSON.stringify(currentCurrency[0].tsupply).replace(/['"]+/g, '')} Coins</p>
    </div>
  )
}

export default Details
