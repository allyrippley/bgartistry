
import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'

const App = () => (
  <div>
    <header style={{ display: 'flex', alignItems: 'center', padding: '50px 32px 0', fontWeight: '100' }}>
      <div style={{ flex: 1}}>

        <div style={{fontSize: '2.2em', letterSpacing: '5px' }}>BG Artistry</div>
        <div style={{fontSize: '1.2em', paddingTop: 20, letterSpacing: '5px' }}>makeup artist</div>
      </div>
      <div style={{fontSize: '.6em', textTransform: 'uppercase', flex: 1, display: 'flex', justifyContent: 'space-around', padding: '70px 0 20px' }}>
        <Link style={{textDecoration: 'none', color: '#777'}} to="/">Recent</Link>
        <Link style={{textDecoration: 'none', color: '#777'}} to="/portfolio">Portfolio</Link>
        <Link style={{textDecoration: 'none', color: '#777'}} to="/schedule">Schedule</Link>
        <Link style={{textDecoration: 'none', color: '#777'}} to="/contact">Contact</Link>
      </div>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/portfolio" component={About} />
      <Route exact path="/schedule" component={About} />
      <Route exact path="/contact" component={About} />
    </main>
  </div>
)

export default App;
