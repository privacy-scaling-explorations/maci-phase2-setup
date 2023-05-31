import React from 'react'
import './App.css'
import { Home } from './pages/home'
import { Footer } from './components/footer/footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GetStarted } from './pages/getStarted'

/**
 * The main component for the app. 
 * @returns <React.JSX.Element> - the App component
 */
function App(): React.JSX.Element {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/get-started" element={<GetStarted />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    )
}

export default App
