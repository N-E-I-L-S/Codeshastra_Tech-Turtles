import Navbar from "./components/Navbar";
import ErrorPage from "./pages/ErrorPage";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UploadImage from "./pages/UploadImage";
import Three1 from "./pages/Three1";

function App() {


  return (
    <div className="app">

      <Navbar />
      <div className='min-h-screen'>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path="*" element={<ErrorPage />}></Route>
          <Route path="/three1" element={<Three1 />} />

          <Route path="/upload" element={<UploadImage />} />


        </Routes>
      </div>

    </div>
  );
}

export default App;
