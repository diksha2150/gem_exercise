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
      <BrowserRouter>
        <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} />
          </Routes>

          <Footer />
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
