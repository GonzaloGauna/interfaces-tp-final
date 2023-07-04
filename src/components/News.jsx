import "../styles/News.css";

export function News() {
  return (
    <div className="container-general">
      <div className="container-title">
        <h2 className="new-title">NOTICIAS</h2>
      </div>
      <div className="news-container">
        <div className="news-responsive">
          <div className="card new">
            <img
              src="https://resizer.glanacion.com/resizer/v2/mas-de-3-cuadras-de-cola-en-la-puerta-del-anses-UB3GOSAZKZCXTKMZYJXOVANQFI.jpg?auth=1c4c70ed6c110f8b0376c2d82238ff0d6830291881ec10fffac126a978c35506&width=879&height=607&quality=80&smart=true"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <a
                className="card-text new-text"
                href="https://www.infobae.com/"
                target="_blank"
              >
                Largas colas en la Anses de Mar del Plata para tramitar la AUH.
              </a>
              <p className="new-date">
                <small className="text-body-secondary">
                  Viernes 30 de junio
                </small>
              </p>
            </div>
          </div>
          <div className="card new">
            <img
              src="https://resizer.glanacion.com/resizer/v2/entrega-de-planes-en-P5GE2NANVFB7TLPMS2OO6RDUIM.jpg?auth=025a1d0aa86d6503b7a26871655742199e86976ad4e949aeb3ac64621d7fbee0&width=879&height=525&quality=80&smart=true"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <a
                className="card-text new-text"
                href="https://www.infobae.com/"
                target="_blank"
              >
                Entrega de planes en 2009, una postal que nunca se dejó de
                replicar.
              </a>
              <p>
                <small className="text-body-secondary">
                  Martes 27 de junio
                </small>
              </p>
            </div>
          </div>
          <div className="card new">
            <img
              src="https://cdn.eldestapeweb.com/eldestape/112022/1668814833879.webp?cw=1280&ch=720&extw=jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <a
                className="card-text new-text"
                href="https://www.infobae.com/"
                target="_blank"
              >
                Tolosa Paz desminitió que vaya a haber recortes de planes
                sociales a pedido del FMI.
              </a>
              <p>
                <small className="text-body-secondary">Lunes 19 de junio</small>
              </p>
            </div>
          </div>
          <div className="card new">
            <img
              src="https://cdn.eldestapeweb.com/eldestape/112022/1669159308168.webp?cw=1280&ch=720&extw=jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <a
                className="card-text new-text"
                href="https://www.infobae.com/"
                target="_blank"
              >
                Validación de identidad del Potenciar Trabajo: cómo es y hasta
                cuándo hay tiempo.
              </a>
              <p>
                <small className="text-body-secondary">
                  Jueves 29 de junio
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-container">
        <a
          className="ver-noticias"
          href="https://www.infobae.com/"
          target="_blank"
        >
          Ver más noticias
        </a>
      </div>
    </div>
  );
}
