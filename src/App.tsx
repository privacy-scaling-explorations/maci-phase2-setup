import React from 'react';
import './App.css';
import { Home } from './pages/home';
import { Footer } from './components/footer/footer';
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';
import { Documentation } from './pages/documentation';

function App(): React.JSX.Element {
  return (
    <div className="App">
        <Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/documentation' element={<Documentation />} />
			</Routes>
			<Footer />
      	</Router>
    </div>
  );
}

export default App;
