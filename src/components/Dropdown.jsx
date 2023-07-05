import React from 'react';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';

export function Dropdown () {
  return (
    <MDBDropdown>
      <MDBDropdownToggle>Mateo Fortuna</MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem link>Perfil</MDBDropdownItem>
        <MDBDropdownItem link>Cerrar sesión</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}