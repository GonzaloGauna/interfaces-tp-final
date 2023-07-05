export function LinksHeader () {
  return (
    <>
      <nav className="navbar d-none d-md-block py-4" style={{ background: "#c1c1c1", color: 'white' }}>
        <div className='container'>
            <a style={{ textDecoration: "none", color: 'white', fontWeight: 'bolder'}} href="#">Educación</a>
            <a style={{ textDecoration: "none", color: 'white', fontWeight: 'bolder'}} href="#">Trabajo</a>
            <a style={{ textDecoration: "none", color: 'white', fontWeight: 'bolder'}} href="#">Matrimonio</a>
            <a style={{ textDecoration: "none", color: 'white', fontWeight: 'bolder'}} href="#">Carga de documentación</a>
        </div>
      </nav>
    </>
  );
}