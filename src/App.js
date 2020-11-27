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
import Details from './Details'

function App () {
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
            <h1>First Page</h1>
            <img src='./leaf.png' alt='Leaf' id='mainImage' />
          </Route>

          <Route exact path='/details'>
            <Details />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
