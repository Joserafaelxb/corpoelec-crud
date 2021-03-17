import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom"
import { db } from "../firebase";
import { toast } from "react-toastify";

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  const getUsuarios = async () => {
    db.collection("Usuarios").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setUsuarios(docs);
    });
  };

  const onDeleteUsuario = async (id) => {
    if (window.confirm("Seguro que quieres eliminar este Usuario?")) {
      await db.collection("Usuarios").doc(id).delete();
      toast("Se ha eliminado correctamente!", {
        type: "error",
        autoClose: 2000
      });
    }
  };

  useEffect(() => {
    getUsuarios();
  }, []);


  return (
    <>

<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <Link to="/" className="navbar-brand active">CORPOELEC</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor01">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
      <Link to="/registrar_usuario" className="nav-link">Agregar Usuario</Link>
      </li>
      <li class="nav-item active">
      <Link to="/verusuarios" className="nav-link">Ver Usuarios</Link>
      <span class="sr-only">(current)</span>
      </li>
    </ul>
  </div>
</nav>

      <div className="col-md-12 p-2">
        {usuarios.map((usuario) => (
          <div className="card mb-1" key={usuario.id}>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h2>{usuario.name}</h2>
                <div>
                  <i
                    className="material-icons text-danger"
                    onClick={() => onDeleteUsuario(usuario.id)}
                  >
                    close
                  </i>
                </div>
              </div>
              <h5>Cedula</h5>
              <h5>{usuario.cedula}</h5>
              <br/>
              <h5>UID & EXT <br/>  {usuario.UID}, {usuario.EXT}</h5>
              <br/>
              <h5>Unidad responsable: {usuario.unidadresponsable}</h5>
              <br/>
              <h5>Ubicacion</h5>
              <h5>{usuario.centrodeservicio} - Piso {usuario.piso}</h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Usuarios;