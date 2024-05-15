import { BrowserRouter, Route, Routes  } from "react-router-dom";
import './App.css'
import Home from "./pages/landing-page/home-page";
import ErrorPage from "./pages/landing-page/error-page";
import Learn from "./pages/learn-page";
import Resources from "./pages/landing-page/resource-page";
import Faq from "./pages/landing-page/faq-page";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
        {/* <Route index element={<Home />} /> */}
        <Route exact path="*" element={<ErrorPage />} />
        <Route exact path="learn" element={<Learn />} />
        <Route exact path="resources" element={<Resources />} />
        <Route exact path="faqs" element={<Faq />} />

    </Routes>
   
  </BrowserRouter>
  )
}

export default App