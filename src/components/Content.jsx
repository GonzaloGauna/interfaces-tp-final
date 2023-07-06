import { Header } from "./Header";
import { Footer } from "./Footer";
import "../styles/Content.css";
import { HeaderMobile } from "./HeaderMobile";

export default function Content() {
  return (
    <div className="container-form-content">
      <Header />
      <HeaderMobile />
      <form action="#" className="content-form" style={{padding: '50px'}}>
        <div className="form-group">
          <label htmlFor="dniFront" className="load-content">
            Frente del DNI:
          </label>
          <div className="inp-container">
            <input
              type="file"
              name="dniFront"
              className="inp-load"
              id="dniFront"
              accept="image/*"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="dniBack" className="load-content">
            Dorso del DNI:
          </label>
          <div className="inp-container">
            <input
              type="file"
              name="dniBack"
              className="inp-load"
              id="dniBack"
              accept="image/*"
              required
            />
          </div>
        </div>
        <div className="btn-content">
          <button type="submit" className="btn-content-form">Subir Imágenes</button>
        </div>
      </form>
      <Footer />
    </div>
  );
}
