import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function Home() {
  return (
    <main className="container text-center mt-5">
      <h1>Vida Saludable 🥗</h1>

      <p>
        Bienvenido a tu página de hábitos saludables.
      </p>

      <Link to="/blog" className="btn btn-primary">
        Ingresar
      </Link>

    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;