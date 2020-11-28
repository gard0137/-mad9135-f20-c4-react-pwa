
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

         <NavLink to={"/details/"}>

           <Card 
          key={name}
          actions={[
           
          ]}
          to={"/userinfo/" + element.id}
          
          title= {element.symbol + " - " +  JSON.stringify(element.name).replace(/['"]+/g, '' )}
          >
  
       

        <p>{"$" + JSON.stringify(element.price_usd).replace(/['"]+/g, '')}</p>
   
       
        </Card>
        </NavLink>
       </div>

       
        )
      })}
          
        </main>
    
    )
}

export default CurrencyList
