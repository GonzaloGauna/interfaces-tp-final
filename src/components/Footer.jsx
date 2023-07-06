import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export function Footer () {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#1E90FF' }}>
      <MDBContainer className='py-4 d-block' style={{justifyContent: 'space-evenly', alignContent: 'center'}}>
        <div className='d-block d-md-flex' style={{justifyContent: 'space-around', alignContent: 'center', height: 'max-content', gap: '50px'}}>

          <div style={{height: 'max-content', margin: 'auto'}}>
            <p>Descarga la App</p>
            <a href="https://play.google.com/store/games?hl=es_AR&gl=US&pli=1" className="bg-black fs-6 p-3" style={{borderRadius: '50px', color: 'white'}} role="button" data-bs-toggle="button">Mi UnlAnses</a>
          </div>
          <div><img style={{width: '100px'}} src="https://www.argentina.gob.ar/sites/default/files/argentina-presidencia.png" alt="logo argentina gobierno" /></div>
          <div style={{margin: 'auto'}}>

            <div><h3 className='p-0 m-0'>Seguinos en</h3></div>
            <section className='p-0 f-flex' style={{justifyContent: 'center', alignContent: 'center'}}>
              <MDBBtn
                rippleColor="dark"
                color='link'
                floating
                size="lg"
                className='text-dark m-1'
                href='#!'
                role='button'
              >
                <MDBIcon fab className='fab fa-facebook-f' />
              </MDBBtn>

              <MDBBtn
                rippleColor="dark"
                color='link'
                floating
                size="lg"
                className='text-dark m-1'
                href='#!'
                role='button'
              >
                <MDBIcon fab className='fa-twitter' />
              </MDBBtn>

              <MDBBtn
                rippleColor="dark"
                color='link'
                floating
                size="lg"
                className='text-dark m-1'
                href='#!'
                role='button'
              >
                <MDBIcon fab className='fa-instagram' />
              </MDBBtn>
            </section>
          </div>
        </div>
      </MDBContainer>
    </MDBFooter>
  );
}