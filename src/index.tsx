/**
 * Main entrypoint of the website
 *
 * Created on April 05, 2020
 * @author Ralph Florent <ralflornt@gmail.com>
 */
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './styles/styles.scss'

const AppRouter = () => (
    <Router>
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/items/1">Item 1</Link></li>
                    <li><Link to="/items/2">Item 2</Link></li>
                </ul>
            </nav>
        </div>
        <div>
            <Route path="/" exact render={() => <p>Welcome</p> }/>
            <Route path="/items/:id" render={({ match }) => <p>This is item {match.params.id}</p> }/>
        </div>
    </Router>
)

const App = () => {

    return (
        <div className="selected-theme common">
            <div className="panel">
                <h3>Font Size</h3>
                <p className="extra-small">Extra Small Text</p>
                <p className="small">Small Text</p>
                <p>Medium Text</p>
                <p className="large">Large Text</p>
                <p className="extra-large">Extra Large Text</p>
            </div>
            <AppRouter/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
