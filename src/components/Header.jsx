import { Dropdown } from "./Dropdown";
import { LinksHeader } from "./LinksHeader";
import { Link } from "react-router-dom";
import "../styles/Header.css"

export function Header() {
  return (
    <>
      <nav
        className="navbar navbar-light d-none d-md-block py-4"
        style={{ background: "#1E90FF" }}
      >
        <div className="container">
          <div className="container-fluid d-flex justify-content-between align-content-center ajuste">
            <Link
              className="navbar-brand"
              to="/"
              style={{ fontWeight: "bold", color: "white" }}
            >
              UnlAnses
            </Link>
            <div className="" style={{ display: "flex", alignItems: "center" }}>
              {/* <div className='rounded-circle bg-black ' style={{width: '30px', height: '30px'}}>
                </div> */}
              <Dropdown />
            </div>
          </div>
        </div>
      </nav>
      <LinksHeader />
    </>
  );
}
