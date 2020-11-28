
/* import '../componens/../App.css' */
import { Button, Card, Row, Col, CardTitle } from 'react-materialize'
import 'materialize-css'
import {
    BrowserRouter as Router,
    NavLink,
    Route,
    Switch
  } from 'react-router-dom'

function CurrencyList ({currencies}) {

    console.log(currencies)
    
    if(!currencies) return (
        <main> 
      <h1 className="loading">Loading</h1>
      </main>
    )

  return(
        <main>
              <h4>Crypto Currencies</h4>
      {currencies.data.map((element, name) => {
        return (
            
          
   
        
        
       <div>
         {/*   <p>{element.symbol} - {element.name} - ${element.price_usd}</p> */}

         <NavLink to={"/details/"+element.nameid}>

           <Card 
          key={name}
          actions={[
           
          ]}
          to={"/details/"+element.nameid}
          
          title= {element.symbol + " - " +  JSON.stringify(element.name).replace(/['"]+/g, '' )}
          >
  
       

        <p> Price {"$" + JSON.stringify(element.price_usd).replace(/['"]+/g, '')}</p>
        <p> 1h Change: {JSON.stringify(element.percent_change_1h).replace(/['"]+/g, '')} %</p>
        <p> 24h Change: {JSON.stringify(element.percent_change_24h).replace(/['"]+/g, '')} %</p>
        <p> 7 day Change: {JSON.stringify(element.percent_change_7d).replace(/['"]+/g, '')} %</p>
   
       
        </Card>
        </NavLink>
       </div>

       
        )
      })}
          
        </main>
    
    )
}

export default CurrencyList
