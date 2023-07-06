import { Header } from "./Header";
import { Footer } from "./Footer";

export default function Content() {
  return (
    <>
      <Header />
      <form action="#" className="content-form">
        <div className="form-group">
          <label htmlFor="dniFront">Frente del DNI:</label>
          <input
            type="file"
            name="dniFront"
            id="dniFront"
            accept="image/*"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dniBack">Dorso del DNI:</label>
          <input
            type="file"
            name="dniBack"
            id="dniBack"
            accept="image/*"
            required
          />
        </div>
        <button type="submit">Subir Imágenes</button>
      </form>
      <Footer />
    </>
  );
}
