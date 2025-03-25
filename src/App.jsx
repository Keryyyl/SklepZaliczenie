import ReactDOM from "react-dom/client";
import {BrowserRouter , Routes, Route} from "react-router-dom";
import Koszyk from "./pages/Koszyk";
import MainPage from "./pages/MainPage";

function App() {

  return (
    <>
        <BrowserRouter>
      <Routes>
          <Route index element={<MainPage />} />
          <Route path="koszyk" element={<Koszyk />} />
          <Route path="*" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
