import './App.css';
import React, {useState, useEffect} from 'react';
import Tabla from './Componets/Tabla';
import From from './Componets/Form/From'

function App() {

  const [user, setUser] = useState([])
  const [unUser , setUnUser] =useState({
    nombreCompleto: '',
    edad: '',
    fechaNac: '',
    fechaIncripcion: '',
    costo: ''
})

  const [listaActualizada, setListaActualizada] = useState(false)

  useEffect(() => {
    const getUser = () => {
      fetch('http://localhost:9000/api')
      .then(res => res.json())
      .then(res => setUser(res))
    }
    getUser()
    
  }, [])



  return (
    <div className="container">
      <div className="row">
        <h1>API ABISOFT</h1>
        <div className="col-7">
          <p>Usuarios</p>
          <Tabla user={user} setListaActualizada={setListaActualizada} setUser={setUser}/>
        </div>
        <div className="col-5">
            <h2 style={{textAlign: 'center'}}>Form</h2>
            <From  unUser={unUser} setUnUser={setUnUser} />
        </div>
      </div>
    </div>
  );
}

export default App;
