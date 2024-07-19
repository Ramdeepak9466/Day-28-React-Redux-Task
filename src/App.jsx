// import Listings from "./components/Lisitings";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import SingleItemPage from "./components/SingleItemPage";
import { Suspense, lazy } from "react";

const Listings = lazy(() => import("./components/Lisitings"));
const SingleItemPage = lazy(() => import("./components/SingleItemPage"));

function App() {
  return (
    <Suspense fallback={<h1>Loading....</h1>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Listings />} />
          <Route path="/:Listingid" element={<SingleItemPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
