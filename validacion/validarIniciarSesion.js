export default function validarIniciarSesion (values) {
  const errores = {}

  if (!values.email) {
    errores.email = 'El email es obligatorio'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errores.email = 'El email no es valido'
  }

  if (!values.password) {
    errores.password = 'El password es obligatorio'
  } else if (values.password.length < 6) {
    errores.password = 'El password debe tener mas de 6 caracteres'
  }

  return errores
}
