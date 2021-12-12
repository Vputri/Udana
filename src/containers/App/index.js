import { Routes, Route } from "react-router-dom";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Home from "../Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" component={Home} exact />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;