import './App.css'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';

import Home from "./pages/home/Home"
import Create from "./pages/create/Create"
import Blog from "./pages/blog/Blog"
import Search from "./pages/search/Search"

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/create">
            <Create />
          </Route>

          <Route path="/search">
            <Search />
          </Route>

          <Route path="/blog/:id">
            <Blog />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App