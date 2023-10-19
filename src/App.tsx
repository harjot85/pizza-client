import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const HomePage = lazy(() => import("src/pages/general/home"));
const MenuPage = lazy(() => import("./pages/general/menu"));
const NoRouteMatchPage = lazy(() => import("./components/IncorrectRoutePage"));

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />

          <Route path="*" element={<NoRouteMatchPage />} />
        </Routes>
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
