import "./App.css";
import Login from "./components/login";
import Register from "./components/reqister";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// axios.defaults.baseURL = 'http://localhost:8000';
// axios.defaults.withCredentials = true;
function App() {
  return (
    <>
      {/* <NavBar/> */}
      {/* <Toaster position='bottom-right' toastOptions={{duration: 3000}} /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
