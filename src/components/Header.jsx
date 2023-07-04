import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit';

export function Header () {
  const [showNavExternal3, setShowNavExternal3] = useState(false);

  return (
    <>
      <nav class="navbar navbar-light bg-light d-none d-md-block">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">UnlAnses</a>
        </div>
      </nav>
    </>
  );
}