import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Box } from "@mui/material";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </Box>
    </>
  );
}

export default App;
