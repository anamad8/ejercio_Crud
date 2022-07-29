import React from 'react'

function From({unUser, setUnUser}) {

    const handleChange = e => {
        setUnUser({
            ...unUser,
            [e.target.name]: e.target.value
        })
    }

    let {nombreCompleto, edad, fechaNac, fechaIncripcion, costo} = unUser

    const handleSubmit = () => { 
        //validación de los datos
        if (nombreCompleto === '' || edad === '' || fechaNac === '' || fechaIncripcion === '' || costo === '' ) {
            alert('Todos los campos son obligatorios')
            return
        }

        //consulta
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(unUser)
        }
        fetch('http://localhost:9000/api', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //reiniciando state de libro
        setUnUser({
            nombreCompleto: '',
            edad: '',
            fechaNac: "",
            fechaIncripcion: '',
            costo: ''
        })
    }

  return (
    <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Nombre Completo</label>
                <input  name="nombreCompleto" value={nombreCompleto} onChange={handleChange} type="text" id="title" className="form-control"/>
            </div>
            <div className="mb-3">
                <label  className="form-label">Edad</label>
                <input  name="edad" onChange={handleChange} type="number" id="author" className="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Fecha Nacimiento</label>
                <input   name="fechaNac" onChange={handleChange} type="date" id="edition" className="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Fecha Incripcion</label>
                <input   name="fechaIncripcion" onChange={handleChange} type="date" id="edition" className="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Costo</label>
                <input   name="costo" onChange={handleChange} type="number" id="edition" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
            
        </form>
  )
}

export default From