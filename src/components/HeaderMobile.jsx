import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { Dropdown } from './Dropdown';

export function HeaderMobile () {
  const [showNavExternal3, setShowNavExternal3] = useState(false);

  return (
    <>
      <MDBNavbar className='d-md-none py-4' style={{ background: "#1E90FF" }}>
        <MDBContainer fluid>
          <MDBNavbarToggler
            className='ms-auto m-0'
            type='button'
            data-target='#navbarToggleExternalContent'
            aria-controls='navbarToggleExternalContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavExternal3(!showNavExternal3)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <div><a className="navbar-brand" style={{fontWeight: 'bold', color: 'white'}} href="#">UnlAnses</a></div>
          <Dropdown />
        </MDBContainer>
      </MDBNavbar>

      <MDBCollapse show={showNavExternal3}>
        <div className='bg-light shadow-3 p-4'>
          <MDBBtn block className='m-0' color='link'>
            Educación
          </MDBBtn>
          <MDBBtn block className='m-0' color='link'>
            Trabajo
          </MDBBtn>
          <MDBBtn block className='m-0' color='link'>
            Matrimonio
          </MDBBtn>
          <MDBBtn block className='m-0' color='link'>
            Carga de documentación
          </MDBBtn>
        </div>
      </MDBCollapse>
    </>
  );
}