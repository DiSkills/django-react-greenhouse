import {Switch, Route} from "react-router-dom";

import Home from "./components/home/home";
import Footer from "./components/footer/footer";
import Categories from "./components/categories/categories";
import GreenHouse from "./components/greenhouse/greenhouse";

import './App.scss';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path='/greenhouses' component={GreenHouse}/>
                <Route exact path='/categories' component={Categories}/>
                <Route component={Home}/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;
