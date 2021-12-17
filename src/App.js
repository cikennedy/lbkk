// import logo from './logo.svg';
import React from "react";
import Album from './pages/Album'
// import AppBar from './components/Appbar'
// import './App.css';
// import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <main>
      {/* <AppBar /> */}
      <Album />
    </main>
    // <Router>
    //   <div>
    //     <Route exact path={[ "/album" ]} component={AppBar} />
    //     <Route exact path="/album" component={Album} />
    //       {/* <Route path="/details/:_id" component={Details} /> */}
    //      {/* <Footer /> */}
    //   </div>
    //  </Router>
  );
}

export default App;