import React from 'react';

function Tabla({user, setListaActualizada, setUser}) {

    const handleDelete = id => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:9000/api/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setListaActualizada(true)
    }

    let {nombreCompleto, edad, fechaNac, fechaIncripcion, costo} = user
    const handleUpdate = id => {
        //validación de los datos
        if (nombreCompleto === '' || edad === '' || fechaNac === '' || fechaIncripcion === '' || costo === '' ) {
            alert('Todos los campos son obligatorios')
            return
        }
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        }
        fetch('http://localhost:9000/api', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //reiniciando state de libro
        setUser({
            nombreCompleto: '',
            edad: '',
            fechaNac: "",
            fechaIncripcion: '',
            costo: ''
        })
        setListaActualizada(true)
    }

  return (
    <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre completo</th>
                    <th>Edad</th>
                    <th>Fecha Nacimiento</th>
                    <th>Fecha Incripcion</th>
                    <th>costo</th>
                </tr>
            </thead>
            <tbody>
                {user.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.NombreCompleto}</td>
                        <td>{user.edad}</td>
                        <td>{user.fechaNac}</td>
                        <td>{user.fechaIncripcion}</td>
                        <td>{user.costo}</td>
                        <td>
                            <div className="mb-3">
                                <button className="btn btn-dark" onClick={() => handleDelete(user.id)}>Borrar</button>
                            </div>
                            <div className="mb-3">
                                <button className="btn btn-danger"  onClick={() => handleUpdate(user.id)}>Editar</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
  )
}

export default Tabla