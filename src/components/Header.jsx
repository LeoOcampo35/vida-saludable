import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-primary text-white p-3">
      <h2>Vida Saludable</h2>

      <nav>
        <Link to="/" className="text-white me-3">
          Inicio
        </Link>

        <Link to="/blog" className="text-white">
          Blog
        </Link>
      </nav>
    </header>
  );
}

export default Header;