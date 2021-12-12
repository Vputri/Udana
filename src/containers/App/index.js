import { Routes, Route,  Switch} from "react-router-dom";
import Home from "../Home";
import Brewery from "../Brewery";
import Login from "../Login";
import Register from "../Register";
import ComingSoon from "../ComingSoon";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Login" component={Login} exact />
        <Route path="/Register" component={Register} exact />
        <Route path="/ComingSoon" component={ComingSoon} exact />
        <Route path="/Brewery" component={Brewery} exact />
      </Switch>  
    </div>
  );
}

export default App;