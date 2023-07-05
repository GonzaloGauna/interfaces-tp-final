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
import { LinksHeader } from './LinksHeader';

export function Header () {
  const [showNavExternal3, setShowNavExternal3] = useState(false);

  return (
    <>
      <nav className="navbar navbar-light d-none d-md-block py-4" style={{ background: "#1E90FF" }}>
        <div className='container'>
          <div className="container-fluid d-flex justify-content-between align-content-center">
              <a className="navbar-brand" href="#" style={{fontWeight: 'bold', color: 'white'}}>UnlAnses</a>
              <div className='' style={{display: 'flex', alignItems: 'center'}}>
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