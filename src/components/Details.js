
/* import '../componens/../App.css' */
import { Button, Card, Row, Col, CardTitle } from 'react-materialize'
import {useParams} from 'react-router-dom'
import 'materialize-css'

function Details ({currencies}) {

    const { nameid } = useParams()
    console.log(nameid)

      let currentCurrency = currencies.data.filter(currency => currency.nameid == nameid)
    console.log(currentCurrency)  

  return (
    <div className='details'>
      <h4>Details Page</h4>
      <p>{currentCurrency[0].name}</p>


      <p> Price {"$" + JSON.stringify(currentCurrency[0].price_usd).replace(/['"]+/g, '')}</p>
        <p> 1h Change: {JSON.stringify(currentCurrency[0].percent_change_1h).replace(/['"]+/g, '')} %</p>
        <p> 24h Change: {JSON.stringify(currentCurrency[0].percent_change_24h).replace(/['"]+/g, '')} %</p>
        <p> 7 day Change: {JSON.stringify(currentCurrency[0].percent_change_7d).replace(/['"]+/g, '')} %</p>
    </div>
  )
}

export default Details
