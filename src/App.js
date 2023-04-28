import { useState, useEffect } from "react";
import "./App.css";
import Main from "./components/layout/Main";
import { Routes, Route } from "react-router-dom";
import Membership from "./components/pages/Membership";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Gallery from "./components/pages/Gallery";
import Blog from "./components/pages/Blog";
import styled from "styled-components";
import ScaleLoader from "react-spinners/ScaleLoader";

function App() {
  const [loading, setLoading] = useState(true);
  const color = "#e67f1a";
  // const color = "#0d0d0d";

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);



  return (
    <>
      {loading ? (
        <InitailSpinner>
          <h1>Syncing</h1>
          <ScaleLoader
        color={color}
        loading={loading}
        size={60}
        aria-label="Loading Spinner"
        data-testid="loader"
        width={7}
      />
        </InitailSpinner>
      ) : (
        <div className="App">
          <Routes>
            <Route path="/" element={<Main />}>
              <Route path="home" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="blog" element={<Blog />} />
              <Route path="contact" element={<Contact />} />
              <Route path="membership" element={<Membership />} />
            </Route>
          </Routes>
        </div>
      )}
    </>
  );
}

const InitailSpinner = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0d0d0d;

  h1{
    color: #e67f1a;
    font-size: 2.7rem;
  }
`;

export default App;
