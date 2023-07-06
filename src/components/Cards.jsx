import '../styles/Cards.css'
import { Link } from "react-router-dom"

export function Cards () {
    return (
        <div className="card-container">
            <div className="card">
                <img src="https://unipe.edu.ar/media/k2/items/cache/e071acc32c7e4befc3022bf1715b6773_XL.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <Link className="card-title" to='/form'>LLená el formulario para obtener tu plan</Link>
                    <p className="card-text">Beca del gobierno argentino para jóvenes estudiantes.</p>
                </div>
            </div>
            <div className="card">
                <img src="https://infopuerto.com.ar/wp-content/uploads/2021/02/bs-as-vacunate.jpeg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <Link className="card-title" to='/form'>Jornada de vacunación, pedí tu turno</Link>
                    <p className="card-text">Habrá 300 dosis para ser aplicadas a personas que traigan su DNI.</p>
                </div>
            </div>
            <div className="card">
                <img src="https://www.nono.gob.ar/wp-content/uploads/2021/09/WhatsApp-Image-2021-09-07-at-6.21.25-PM-2048x1024.jpeg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <Link className="card-title" to='/form'>Plan nacional y federal de formación en programación.</Link>
                    <p className="card-text">Programa para capacitaciones gratuitas en programación.</p>
                </div>
            </div>
        </div>
    )
}