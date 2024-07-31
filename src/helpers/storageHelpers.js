import { DATA_ENTORNOS_TRABAJO, USUARIO_LOGUEADO } from "../data/dataWorkspaces";

// Guardar los entornos de trabajo en localStorage
const guardarEntornosTrabajo = (entornos) => {
    localStorage.setItem('entornosTrabajo', JSON.stringify(entornos))
    return entornos
}

// Obtener los entornos de trabajo
export const obtenerEntornosTrabajo = () => {
    const entornosGuardados = localStorage.getItem('entornosTrabajo')
    if (entornosGuardados) {
        return JSON.parse(entornosGuardados)
    }
    else {
        return guardarEntornosTrabajo(DATA_ENTORNOS_TRABAJO)
    }
}

// Guardar el usuario logueado en localStorage
const guardarUsuarioLogueado = (usuario) => {
    localStorage.setItem('usuarioLogueado', JSON.stringify(usuario))
    return usuario
}

// Obtener el usuario logueado
export const obtenerUsuarioLogueado = () => {
    const usuarioGuardado = localStorage.getItem('usuarioLogueado')
    if (usuarioGuardado) {
        return JSON.parse(usuarioGuardado)
    }
    else {
        return guardarUsuarioLogueado(USUARIO_LOGUEADO)
    }
}

// Agregar un nuevo mensaje a un canal
export const agregarNuevoMensaje = (idEntorno, idCanal, nuevoMensaje) => {
const entornos = obtenerEntornosTrabajo()
const entorno = entornos.find(entorno => entorno.id === idEntorno)
if (entorno) {
    const canal = entorno.canales.find(canal => canal.id === idCanal)
    if (canal) {
        canal.mensajes.push(nuevoMensaje)
        return guardarEntornosTrabajo(entornos)
    }
}
return entornos
}

// Obtener entorno por ID
export const obtenerEntornoPorId = (idEntorno) => {
    const entornos = obtenerEntornosTrabajo()
    return entornos.find(entorno => entorno.id === idEntorno) || null
}

// Obtener canal por ID dentro del entorno
export const obtenerCanalPorId = (idEntorno, idCanal) => {
    const entorno = obtenerEntornoPorId(idEntorno)
    if (entorno) {
        return entorno.canales.find(canal => canal.id === idCanal) || null
    }
    return null
}