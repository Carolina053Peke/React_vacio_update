import React, { useState  } from "react";
import '../../index.css'

const Foro = () => {

    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        mail: '',
        texto: '',
    })

    const [formLleno, setFormLleno] = useState(false)

    const manejoCambioTexto = (event) => {

        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        setFormLleno(true)
    }

    const formulario = {
        display:'block',
        alignItems: 'center',
        fontSize: '20px',
        fontStyle: 'italic',   
        position: 'relative',
        textAlign: 'center'
    }

    const inputLabel = {
        width: '35%',
        padding: '12px 20px',
        boxSizing: 'borderBox',
    }
    
    return (
        <>
        <div id="foro" className="Form">
        <h1 className="titulo">Foro TransFormando</h1>

        <div className="comentarios">
        <div className="comentario1">
        <h3>Usuario Anónimo</h3>
        <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
        </div>
        <br></br>
        <div className="comentario2">
        <h3>Carlos Sánchez</h3>
        <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
        </div>
        <br></br>
        <div className="comentario3">
        <h3>Abril Alonso</h3>
        <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
        </div>
        <br></br>
        </div>


            {
                formLleno ? 
                    
                <h2>¡Gracias! Tu comentario ayuda a muchas personas. Lo revisaremos y lo agregaremos al foro.</h2>

                : 
                
                <form style={formulario} onSubmit={enviarDatos}>
                    <h1>Agregar comentario...</h1>
                    <div >
                    <label htmlFor="nombre">Nombre</label>
                    <br></br>
                    <br></br>
                        <input style={inputLabel} 
                        type="text" 
                        placeholder="Nombre"
                        className="nombre"
                        onChange={manejoCambioTexto} 
                        name="nombre" />
                    </div>
                    <br></br>
                    <div>
                    <label htmlFor="apellido">Apellido</label>
                    <br></br>
                    <br></br>
                        <input style={inputLabel} 
                        type="text" 
                        placeholder="Apellido"
                        className="apellido"
                        onChange={manejoCambioTexto}
                        name="apellido" />
                    </div>
                    <br></br>
                    <div>
                    <label htmlFor="mail">Mail</label>
                    <br></br>
                    <br></br>
                        <input style={inputLabel} 
                        type="text" 
                        placeholder="email@example.com" 
                        className="mail"
                        onChange={manejoCambioTexto} 
                        name="mail" />
                    </div>
                    <br></br>
                    <div>
                    <label htmlFor="texto">Tu comentario</label>
                    <br></br>
                    <br></br>
                        <input style={inputLabel} 
                        type="text" 
                        placeholder="Tu comentario..."
                        className="texto"
                        onChange={manejoCambioTexto} 
                        name="texto" />
                    </div>
                    <br></br>
                    <div>
                    <label>
                    <input type="checkbox" />
                    Prefiero mantenerme anonimx
                    </label>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="col-md-4">
                        <button type="submit" className="boton">Enviar</button>
                    </div>
                </form>
            }
        </div>
        </>
        )
    }
    
    export default Foro;