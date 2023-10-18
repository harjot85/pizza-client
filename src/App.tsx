import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("src/pages/general/home"));
const MenuPage = lazy(() => import("./pages/general/menu"));
const NoRouteMatchPage = lazy(() => import("./components/IncorrectRoutePage"));

//import { QueryClient, QueryClientProvider } from "react-query";
//import Menu from "./components/Menu";

function App() {
  //const queryClient = new QueryClient();

  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />

          <Route path="*" element={<NoRouteMatchPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
