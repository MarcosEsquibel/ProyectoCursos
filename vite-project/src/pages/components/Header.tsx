import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
       Kavurey Group - Plataforma de Formaciones Online
      </Link>
</h1>
      <nav style={styles.nav}>
        <Link to="/login" style={styles.link}>Acceso al usuario</Link>
        <Link to="/register" style={styles.link}>Registrarse</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    flexWrap: "wrap" as const,
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#282c34",
    color: "white",
  },
  logo: {
    margin: 0,
    fontSize: "1.8rem",
    flexGrow: 1,
  },
  nav: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "1rem",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "color 0.3s ease",
  } as React.CSSProperties,
};

// Agrega hover dinámico (JSX no permite :hover en inline styles, así que es mejor con CSS real o una librería)
export default Header;


 