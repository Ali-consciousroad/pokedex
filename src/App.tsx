import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";


const PokemonList = lazy(() => import("./Pokedex/PokemonList"));
const PokemonDetails = lazy(() => import("./Pokedex/PokemonDetails"));

const queryClient = new QueryClient();

const App = () => {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<PokemonList />} />
            <Route path="/details/:name" element={<PokemonDetails />} />
          </Routes>
        </Suspense>
      </QueryClientProvider>
    </Router>
  );
};

export default App;
