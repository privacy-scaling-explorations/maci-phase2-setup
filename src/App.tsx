import React from 'react';
import './App.css';
import { Home } from './pages/home';
import { Footer } from './components/footer/footer';
import { FAQ } from './pages/faq';

function App(): React.JSX.Element {
  return (
    <div className="App">
        <Home />
        <FAQ />
        <Footer />
    </div>
  );
}

export default App;
