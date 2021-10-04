import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Services from './components/Services/Services';
import Courses from './components/Courses/Courses';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import React from 'react';
import { useState } from 'react';

// React Context Created
export const SearchContext = React.createContext('search');

function App() {
  const [searched, setSearched] = useState('');
  const handleOnSearch = name => {
    setSearched(name);
  }
  return (
    <SearchContext.Provider
      value={{ handleOnSearch: handleOnSearch, searched: searched }}
    >
      <div className="App">
        {/* Router Strats  */}
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/courses">
              <SearchBar></SearchBar>
              <Courses></Courses>
            </Route>
            <Route exact path="/services">
              <SearchBar></SearchBar>
              <Services></Services>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
        {/* Router Ends  */}
      </div>
    </SearchContext.Provider>
  );
}

export default App;
