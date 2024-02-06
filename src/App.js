import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import Layout from './pages/Layout';
import Accomodation from "./pages/Accomodation";
import About from "./pages/About";
import Error from "./pages/Error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}> 
          <Route index element={<HomePage />} />
          <Route path="accomodation" element={<Accomodation />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;