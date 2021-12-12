import { Routes, Route,  Switch} from "react-router-dom";
import Home from "../Home";
import Brewery from "../Brewery";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Brewery" component={Brewery} exact />
      </Switch>  
    </div>
  );
}

export default App;