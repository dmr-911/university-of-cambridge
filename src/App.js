import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import CarouselContainer from './components/Carousel/CarouselContainer';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <SearchBar></SearchBar>
        <CarouselContainer></CarouselContainer>
        <Services></Services>
        <Switch>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
