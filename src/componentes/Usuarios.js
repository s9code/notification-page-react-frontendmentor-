import React from 'react';
import '../hojas-de-estilo/Usuarios.css'

function Usuarios(props){
  return (
    <div className='contenedor-usuarios'>

      <div className='contenedor-imagen-usuarios'>
        <img
        className='imagen-usuarios'
        src={require(`../images/avatar-${props.imagen}.webp`)}
        alt='Foto de Usuario' />
      </div>

      <div className='contenedor-texto-usuarios'>
        <div className='contenedor-texto'>
          <p className='nombre-usuario'><strong>{props.nombre}</strong></p>
          <p className='notificacion-ususario'>{props.notificacion}</p>
          <p className='notificacion-ususario'><strong>{props.texto}</strong></p>
          <p className='notificacion-ususario grupo'><strong>{props.grupo}</strong></p>
        </div>
        <p className='fecha-usuario'>{props.fecha} ago</p>
      </div>
    </div>
    )
}

export default Usuarios;