/**
 * Main entrypoint of the website
 *
 * Created on April 05, 2020
 * @author Ralph Florent <ralflornt@gmail.com>
 */
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import './styles/styles.scss'

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
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
