import { Home }  from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";

function App() {

  return <BrowserRouter>
        <Routes>
          <Route index path="/portfolio" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
}

export default App;