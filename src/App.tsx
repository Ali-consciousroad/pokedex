import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const PokemonList = lazy(() => import("./Pokedex/PokemonList"));
const PokemonDetails = lazy(() => import("./Pokedex/PokemonDetails"));

const queryClient = new QueryClient();

const App = () => {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <Route path="/">
          <PokemonList />
        </Route>
        <Route path="/details/:name">
          <PokemonDetails />
        </Route>
      </QueryClientProvider>
    </Router>
  );
};

export default App;
