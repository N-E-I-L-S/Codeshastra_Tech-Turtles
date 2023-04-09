import Navbar from "./components/Navbar";
import ErrorPage from "./pages/ErrorPage";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UploadImage from "./pages/UploadImage";
import Three1 from "./pages/Three1";
import VirtualHouse from "./pages/VirtualHouse";
import Visualize from "./pages/Visualize";
import Inspire from "./pages/Inspire";
import Recommend from "./pages/Recommend";
import Hello from "./pages/Chatbot";

function App() {


  return (
    <div className="app">

      <Navbar />
      <div className='min-h-screen'>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path="*" element={<ErrorPage />}></Route>
          <Route path="/virtualhouse" element={<VirtualHouse />} />
          <Route path="/visualize" element={<Visualize />} />
          <Route path="/inspire" element={<Inspire />} />
          <Route path="/recommend" element={<Recommend />} />
          <Route path="/chatbot" element={<Hello />} />
          <Route path="/upload" element={<UploadImage />} />


        </Routes>
      </div>

    </div>
  );
}

export default App;
