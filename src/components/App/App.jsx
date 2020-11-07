import React from 'react'
import AppRoutes from './App.routes'
import { BrowserRouter as Router } from 'react-router-dom'
import Store from './App.store'

const App = () => {
    return(
        <Store.Container>
        <div className="App">
            <Router>
                <AppRoutes />
            </Router>
        </div>
        </Store.Container>
    )
}

export default App