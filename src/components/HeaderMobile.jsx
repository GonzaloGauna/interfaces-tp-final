import { useState } from "react";
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Dropdown } from "./Dropdown";
import { Link } from "react-router-dom";

export function HeaderMobile() {
  const [showNavExternal3, setShowNavExternal3] = useState(false);

  return (
    <>
      <MDBNavbar className="d-md-none py-4" style={{ background: "#1E90FF" }}>
        <MDBContainer >
          <MDBNavbarToggler
            type="button"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavExternal3(!showNavExternal3)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <div className="container-title-header m-0">
            <Link
              className="navbar-brand"
              style={{ fontWeight: "bold", color: "white" }}
              to="/"
            >
              UnlAnses
            </Link>
          </div>
          <Dropdown />
        </MDBContainer>
      </MDBNavbar>

      <MDBCollapse show={showNavExternal3}>
        <div className="bg-light shadow-3 p-4">
          <Link to="/content">
            <MDBBtn block className="m-0" color="link">
              Educación
            </MDBBtn>
          </Link>
          <Link>
            <MDBBtn block className="m-0" color="link">
              Trabajo
            </MDBBtn>
          </Link>
          <Link>
            <MDBBtn block className="m-0" color="link">
              Matrimonio
            </MDBBtn>
          </Link>
          <Link>
            <MDBBtn block className="m-0" color="link">
              Carga de documentación
            </MDBBtn>
          </Link>
        </div>
      </MDBCollapse>
    </>
  );
}
