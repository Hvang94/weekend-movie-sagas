import { Route, HashRouter as Router } from "react-router-dom";
import MovieList from "../MovieList/MovieList";
import "./App.css";
import { DetailsPage } from "../DetailsPage/DetailsPage";
import { AddMovie } from "../AddMovie/AddMovie";

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>

        <Route path="/DetailsPage">
          <DetailsPage />
        </Route>

        <Route path="/AddMovie">
          <AddMovie />
        </Route>
      </Router>
    </div>
  );
}

export default App;
