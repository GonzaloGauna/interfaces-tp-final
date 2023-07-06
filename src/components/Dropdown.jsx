import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export function Dropdown() {
  return (
    <MDBDropdown>
      <MDBDropdownToggle>Mateo Fortuna</MDBDropdownToggle>
      <MDBDropdownMenu>
        <Link to="/profile">
          <MDBDropdownItem link>Perfil</MDBDropdownItem>
        </Link>
        <MDBDropdownItem link>Cerrar sesión</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}
