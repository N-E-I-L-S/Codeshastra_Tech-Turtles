import Navbar from "./components/Navbar";
import ErrorPage from "./pages/ErrorPage";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UploadImage from "./pages/UploadImage";

function App() {


  return (
    <div className="">

      <Navbar />
      <div className='min-h-screen'>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path="*" element={<ErrorPage />}></Route>
          <Route path="/upload" element={<UploadImage />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
