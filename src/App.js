import { Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import About from "./containers/About";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
