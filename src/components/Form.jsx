import "../styles/Form.css";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "./Header";
import { HeaderMobile } from "./HeaderMobile";
import { Footer } from "./Footer";

export default function Formulario() {
  const [success, setSuccess] = useState(false);
  const [correo, setCorreo] = useState("");

  return (
    <>
      <Header />
      <HeaderMobile />
      <div className="contenedor">
        <Formik
          initialValues={{
            dni: "",
            nombre: "",
            apellido: "",
            genero: "",
            trabajando: "",
            correo: "",
          }}
          validate={(values) => {
            let errors = {};

            if (!/^[0-9]+$/.test(values.dni)) {
              errors.dni = "Escribí tu DNI sin puntos ni espacios.";
            } else if (!values.dni) {
              errors.dni = "Por favor escribí tu DNI.";
            }

            if (!values.nombre) {
              errors.nombre = "Por favor escribí tu nombre completo.";
            } else if (!/^[a-zA-Z\s]*$/.test(values.nombre)) {
              errors.nombre =
                "El nombre solo puede contener letras y espacios.";
            }

            if (!values.apellido) {
              errors.apellido = "Por favor escribí tu/s apellido/s.";
            } else if (!/^[a-zA-Z\s]*$/.test(values.apellido)) {
              errors.apellido =
                "El apellido solo puede contener letras y espacios.";
            }

            if (!values.genero) {
              errors.genero = "Por favor seleccioná una opción.";
            }

            if (!values.trabajando) {
              errors.trabajando = "Por favor elegí una opción.";
            }

            if (!values.correo) {
              errors.correo =
                "Por favor escribí tu dirección de correo electrónico.";
            } else if (
              !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                values.correo
              )
            ) {
              errors.correo =
                "El correo solo puede contener letras, números, puntos, guiones y guiones bajos.";
            }

            return errors;
          }}
          onSubmit={(values, { resetForm }) => {
            setSuccess(true);
            setCorreo(values.correo);
            resetForm();
          }}
        >
          {({ errors }) => (
            <Form action="" className="formulario">
              <small className="form-campo-obligatorio">
                * Representa campo obligatorio
              </small>
              <div>
                <label htmlFor="dni">
                  <small className="campo-obligatorio">*</small> DNI (sin puntos
                  ni espacios)
                </label>
                <Field
                  type="number"
                  name="dni"
                  placeholder="Ej: 40806123"
                  id="dni"
                />
                <ErrorMessage
                  name="dni"
                  component={() => {
                    return <span className="error">{errors.dni}</span>;
                  }}
                />
              </div>
              <div>
                <label htmlFor="nombre">
                  <small className="campo-obligatorio">*</small> Nombre
                </label>
                <Field
                  type="text"
                  name="nombre"
                  placeholder="Ej: Mateo"
                  id="nombre"
                />
                <ErrorMessage
                  name="nombre"
                  component={() => {
                    return <span className="error">{errors.nombre}</span>;
                  }}
                />
              </div>
              <div>
                <label htmlFor="apellido">
                  <small className="campo-obligatorio">*</small> Apellido
                </label>
                <Field
                  type="text"
                  name="apellido"
                  placeholder="Ej: Fortuna"
                  id="apellido"
                />
                <ErrorMessage
                  name="apellido"
                  component={() => {
                    return <span className="error">{errors.apellido}</span>;
                  }}
                />
              </div>
              <div>
                <label htmlFor="genero">
                  <small className="campo-obligatorio">*</small> Género
                </label>
                <Field as="select" name="genero" id="genero">
                  <option value="none" hidden>
                    Seleccione un género
                  </option>
                  <option value="masculino" className="opcion-genero">
                    Masculino
                  </option>
                  <option value="femenino" className="opcion-genero">
                    Femenino
                  </option>
                  <option value="otro" className="opcion-genero">
                    Otro
                  </option>
                </Field>
                <br />
                <ErrorMessage
                  name="genero"
                  component={() => {
                    return <span className="error">{errors.genero}</span>;
                  }}
                />
              </div>
              <div>
                <h5>
                  <small className="campo-obligatorio">*</small> ¿Se encuentra
                  trabajando actualmente?
                </h5>
                <label>
                  <Field type="radio" name="trabajando" value="si" /> Si
                </label>
                <label>
                  <Field type="radio" name="trabajando" value="no" /> No
                </label>
                <ErrorMessage
                  name="trabajando"
                  component={() => {
                    return <span className="error">{errors.trabajando}</span>;
                  }}
                />
              </div>
              <div>
                <label htmlFor="correo">
                  <small className="campo-obligatorio">*</small> Correo
                </label>
                <Field
                  type="text"
                  name="correo"
                  placeholder="Ej: mateo.fortuna@mail.com"
                  id="correo"
                />
                <ErrorMessage
                  name="correo"
                  component={() => {
                    return <span className="error">{errors.correo}</span>;
                  }}
                />
              </div>
              {!success && <button type="submit">Enviar</button>}

              {success && (
                <>
                  <p className="exito">
                    ¡Formulario enviado correctamente!
                    <br />
                    Vas a recibir la aprobación en tu correo electrónico:{" "}
                    {correo}
                  </p>
                  <div className="btns-container">
                    <Link className="btn-end-form" to="/">
                      Volver al inicio
                    </Link>
                    <Link className="btn-end-form" to="/profile">
                      Ver progreso en mi perfil
                    </Link>
                  </div>
                </>
              )}
            </Form>
          )}
        </Formik>
      </div>
      <Footer/>
    </>
  );
}
