import Headers from "./components/Headers";
import Home from "./components/Home";
import Cart from "./components/Cart";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
            <Router>

      <Headers/>
         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cart" element={<Cart/>} />
         </Routes>
      </Router>
    </div>
  );
}

export default App;
