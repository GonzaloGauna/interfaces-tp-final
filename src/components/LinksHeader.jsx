import { Link } from "react-router-dom";
import "../styles/LinksHeader.css"

export function LinksHeader () {
  return (
    <>
      <nav className="navbar d-none d-md-block py-4" style={{ background: "#26b9ec", color: 'white' }}>
        <div className='container'>
            <Link to="/content" className="link-header" >Educación</Link>
            <Link to="/content" className="link-header">Trabajo</Link>
            <Link to="/content" className="link-header">Matrimonio</Link>
            <Link to="/content" className="link-header">Carga de documentación</Link>
        </div>
      </nav>
    </>
  );
}