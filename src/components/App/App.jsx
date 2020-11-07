import React from 'react'
import AppRoutes from './App.routes'
import { BrowserRouter as Router } from 'react-router-dom'


const App = () => {
    return(
        <div className="App">
            <Router>
                <AppRoutes />
            </Router>
        </div>
        
    )
}

export default App