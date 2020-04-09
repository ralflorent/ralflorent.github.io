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
        <div style={{textAlign: "center"}}>
            <h3 className="large">Ralph Florent's Personal Website</h3>
            <p className="extra-large">Under construction...</p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
