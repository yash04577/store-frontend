import Annoucement from "./components/Annoucement";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import SinglePage from "./pages/SinglePage";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Context from "./context/Context";
import State from "./context/State";


function App() {
  return (
    <>
      <State>
      <Annoucement></Annoucement>
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/singleproduct" element={<SinglePage></SinglePage>} />
        </Routes>
      </BrowserRouter>
      </State>
      
    </>
  );
}

export default App;
