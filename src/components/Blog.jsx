function Blog() {
  return (
    <div className="container mt-4">

      <h1 className="text-center mb-4">
        Blog Vida Saludable
      </h1>

      <div className="row">

        <div className="col-md-6">

          <img
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061"
            className="img-fluid rounded"
            alt="Comida saludable"
          />

          <h3 className="mt-3">
            Alimentación saludable
          </h3>

          <p>
            Consumir frutas y verduras ayuda a mantener una vida sana y mejorar la calidad de vida.
          </p>

        </div>

        <div className="col-md-6">

          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
            className="img-fluid rounded"
            alt="Ejercicio"
          />

          <h3 className="mt-3">
            Actividad física
          </h3>

          <p>
            Realizar ejercicio diariamente mejora la salud y el bienestar físico.
          </p>

        </div>

      </div>
    </div>
  );
}

export default Blog;