import { useState } from 'react';
import './App.css';
import Usuarios from './componentes/Usuarios';



function App({onChangeColor}) {

  const [clicks, setClicks] = useState(3);
  const [aplicarClase, setAplicarClase] = useState(false);

  function handleClickOutside() {
    setClicks(c => 0)
    setAplicarClase(!aplicarClase);
  }


  return (
    <div className="App">
      
      <div className='contenedor-principal'>
        <div className='contenedor-notificacion'>
          <h1>Notifications</h1>
          <button className="boton">
            <p>{clicks}</p>
          </button>
        </div>
        <button className='boton-leido' onClick={handleClickOutside}>Mark all as read</button>
      </div>

      <div className='contenedor-usuarios'>
        <div className='general'>

          <div className='usuario no-leidc aviso'>
            <Usuarios
            nombre= 'Mark Webber' 
            imagen ='mark-webber'
            notificacion ='reacted to your recent post '
            texto = 'My first tournament today!'
            punto = {<p className={aplicarClase ? 'punto-vacio' : 'punto-rojo'}></p>}
            fecha = '1m'/>
          </div>
          <div className='usuario no-leidc aviso'>
            <Usuarios 
            nombre= 'Angela Gray' 
            imagen ='angela-gray'
            notificacion ='followed you'
            punto = {<p className={aplicarClase ? 'punto-vacio' : 'punto-rojo'}></p>}
            fecha = '5m'/>
          </div>
          <div className='usuario no-leidc aviso'>
            <Usuarios 
            nombre= 'Jacob thompson' 
            imagen ='jacob-thompson'
            notificacion ='has joined your group '
            grupo = 'Chess Club'
            punto = {<p className={aplicarClase ? 'punto-vacio' : 'punto-rojo'}></p>}
            fecha = '1 day'
            />
          </div>
          <div className='usuario'>
            <Usuarios 
            nombre= 'Rizky Hasanuddin' 
            imagen ='rizky-hasanuddin'
            notificacion ='senti you a private message '
            fecha = '5 day'
            />
            <p className='comentario'>Hello, thanks for setting up the Chess Club. 
              I've been a member for a few weeks now and 
              I'm already having lots of fun and improving my game.
            </p>
          </div>
          <div className='usuario usuario-imagen'>
            <Usuarios 
            nombre= 'Kimberly Smith' 
            imagen ='kimberly-smith'
            notificacion ='commented on your picture'
            fecha = '1 week'
            />
            <img
              className='imagen-usuarios'
              src={require(`./images/image-chess.webp`)}
              alt='Foto de Usuario' />
          </div>
          <div className='usuario'>
            <Usuarios 
            nombre= 'Nathan Peterson' 
            imagen ='nathan-peterson'
            notificacion ='reacted to your recent post '
            texto = '5 end-game strategies to increase your win rate'
            fecha = '2 weeks'
            />
          </div>
          <div className='usuario'>
            <Usuarios 
            nombre= 'Anna Kim' 
            imagen ='anna-kim'
            notificacion ='left the group '
            grupo = 'Chess Club'
            fecha = '2 weeks'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
