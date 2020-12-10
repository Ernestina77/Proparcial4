export default function Notas({citas, quitarCita}){
    return(
        <div className="citas">
            <h2>Citas</h2>
            {citas.length !== 0 ?
                <div className="lista">
                    {citas.map((cita, index)=>(
                        <div className="cita" key={index}>
                            <div className="texto">
                                <h3>{cita.nombre}</h3>
                                <p>{cita.descripcion}</p>
                            </div>
                            <div className="btns">
                                <span onClick={()=>{quitarCita(cita.id)}}><i className="far fa-trash-alt"></i></span>
                            </div>
                        </div>
                    ))}
                </div>
                :
                <div className="vacio">
                    <img src="./img/vacio.svg" alt=""/>
                    <img src="./img/huellas.svg" alt=""/>
                    <h3>Aún no hay ninguna cita :(</h3>
                </div>
            }
        </div>
    )
}