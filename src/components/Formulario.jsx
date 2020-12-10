import {useState} from 'react'
import {isEmpty} from 'validator'
import Swal from 'sweetalert2'
import shortid from 'shortid'

export default function Formulario({agregarCita}){

    //Estados
    const [formulario, setFormulario] = useState({
        nombre: '',
        descripcion: ''
    })
    const {nombre, descripcion} = formulario;

    const [error, setError] = useState({
        activo: false,
        mensaje: ''
    })

    //Capturar lo que escribimos en el formulario
    function capturarDatos(e){
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        })
    }

    function validarDatos(e){
        e.preventDefault();

        if(isEmpty(nombre) || isEmpty(descripcion)){
            setError({
                activo: true,
                mensaje: 'Por favor complete todos los campos*'
            })
        } else {
            setError({
                activo: false,
                mensaje: ''
            })
            agregarCita({
                ...formulario,
                id: shortid.generate()
            });
            setFormulario({
                nombre: '',
                descripcion: ''
            })
            const Toast = Swal.mixin({
                toast: true,
                position: 'bottom-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            
            Toast.fire({
                icon: 'success',
                title: 'Tarea Añadida'
            })
        }
    }

    return(
        <form onSubmit={validarDatos}>
            <h2>Nueva Cita</h2>
            <div className="campo">
                <label htmlFor="nombre">Nombre</label>
                <input 
                    type="text" name="nombre" id="nombre"
                    value={nombre}
                    onChange={capturarDatos}
                />
            </div>
            <div className="campo">
                <label htmlFor="descripcion">Descripción</label>
                <textarea 
                    name="descripcion" id="descripcion"
                    value={descripcion}
                    onChange={capturarDatos}
                ></textarea>
            </div>
            <p className="error">{error.activo && error.mensaje}</p>
            <div className="botonera">
                <button className="btn">Crear Cita</button>
            </div>
        </form>
    )
}