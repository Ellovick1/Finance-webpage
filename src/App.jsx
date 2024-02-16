import { BrowserRouter, Route, Routes  } from "react-router-dom";
import './App.css'
import Home from "./pages/landing-page/home-page";
import ErrorPage from "./pages/landing-page/error-page";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
        {/* <Route index element={<Home />} /> */}
        <Route exact path="*" element={<ErrorPage />} />

    </Routes>
   
  </BrowserRouter>
  )
}

export default App