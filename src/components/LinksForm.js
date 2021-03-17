import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { toast } from "react-toastify";
import { Link, useHistory } from "react-router-dom";

const LinksForm = (props) => {
  const initialStateValues = {
    cedula: "",
    name: "",
    description: "",
    description2: "",
    description3: "",
    description4: "",
    description5: "",
    description6: "",
    description7: "",
    description8: "",
    description9: "",
    UID: "",
    EXT: "",
    tipodeuser: "",
    unidadresponsable: "",
    centrodeservicio: "",
    piso: "",
    version:"",
    dd_gb:"",
    ram:"",
    procesador:"",
    analistaDeSoporte:"",
    serial1:"",
    serial2:"",
    serial3:"",
    serial4:"",
    serial5:"",
    serial6:"",
    serial7:"",
    serial8:"",
    serial9:"",
  };

  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const validCedula = (str) => {
    var pattern = new RegExp(
     "[0-9]{0,8}",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validCedula(values.cedula)) {
      return toast("Cedula Invalida", { type: "warning", autoClose: 1000 });
    }

    props.addOrEditUser(values);
    setValues({ ...initialStateValues });
  };

  const getUserById = async (id) => {
    const doc = await db.collection("Usuarios").doc(id).get();
    setValues({ ...doc.data() });
  };

  useEffect(() => {
    if (props.currentId === "") {
      setValues({ ...initialStateValues });
    } else {
      getUserById(props.currentId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.currentId]);

  return (
    
    <div>

<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
<Link to="/" className="navbar-brand active">CORPOELEC</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor01">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Agregar Usuario
          <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item">
      <Link to="/verusuarios" className="nav-link">Ver Usuarios</Link>
      </li>
    </ul>
  </div>
</nav>



    <form onSubmit={handleSubmit} className="card card-body border-primary">
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">assignment_ind</i>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Cedula"
          value={values.cedula}
          name="cedula"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">person_pin</i>
        </div>
        <input
          type="text"
          value={values.name}
          name="name"
          placeholder="Nombre Completo"
          className="form-control"
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <textarea
          rows="1"
          className="form-control"
          placeholder="UID Del Usuario"
          name="UID"
          value={values.UID}
          onChange={handleInputChange}
        ></textarea>
      </div>

      <div className="form-group">
        <textarea
          rows="1"
          className="form-control"
          placeholder="EXT"
          name="EXT"
          value={values.EXT}
          onChange={handleInputChange}
        ></textarea>
      </div>


      <div class="form-group">
            
            <select multiple="" 
            class="form-control" 
            name="tipodeuser" id="tipodeuser" 
            onChange={handleInputChange} 
            values={values.tipodeuser}>
            <option>PERSONAL</option>
            <option>Fijo</option>
            <option>Pasante</option>   
            </select> 
            </div>

        <div className="form-group">
            <textarea
            rows="1"
            className="form-control"
            placeholder="Unidad Responsable"
            name="unidadresponsable"
            value={values.unidadresponsable}
            onChange={handleInputChange}
            ></textarea>
        </div>

        <div class="form-group">
        <label for="ubicacion">Ubicacion</label>
            <select multiple="" 
            class="form-control" 
            name="centrodeservicio" 
            id="centrodeservicio" 
            onChange={handleInputChange}
            values={values.centrodeservicio}>
            <option>Centro de Servicio</option>
            <option>Capital | MPPEE CORPOELEC</option>
            <option>Capital | Santa Rosa</option>
            <option>Capital | Centro de Servicio La Yaguara</option>
            <option>Capital | CIAU Av Sucre</option>
            <option>Capital | CIAU El Junquito</option>
            <option>Capital | CIAU La Pastora</option>
            <option>Capital | CIAU El Valle</option>
            <option>Capital | CIAU San Bernardino</option>
            <option>Capital | CIAU Santa Rosa</option>
            <option>La Guaira | Centro de Servicio Guanape</option>
            <option>La Guaira | CGJJSB Tacoa</option>
            <option>La Guaira | CIAU Maiquetia</option>
            <option>La Guaira | CIAU Catia la Mar</option>
            <option>La Guaira | CIAU Carayaca</option>
            <option>La Guaira | CIAU Colonia Tovar</option> 
            </select>
            </div>

      <div className="form-group">
            <textarea
            rows="1"
            className="form-control"
            placeholder="Piso"
            name="piso"
            value={values.piso}
            onChange={handleInputChange}
            ></textarea>
      </div>

      <div class="form-group">
          <label for="ubicacion">Capacidad del Equipo</label>
          <select multiple="" class="form-control" name="sistema" id="sistema" onChange={handleInputChange} values={values.sistema}>
            <option> Tipo de Sistema Operativo</option>
            <option> Propietario</option>
            <option> Libre</option>
          </select>
      </div>

      <div className="form-group">
            <textarea
            rows="1"
            className="form-control"
            placeholder="Verion"
            name="version"
            value={values.version}
            onChange={handleInputChange}
            ></textarea>
      </div>

      <div className="form-group">
            <textarea
            rows="1"
            className="form-control"
            placeholder="Capacidad del DD en GB"
            name="dd_gb"
            value={values.dd_gb}
            onChange={handleInputChange}
            ></textarea>
      </div>

      <div className="form-group">
            <textarea
            rows="1"
            className="form-control"
            placeholder="Capacidad de RAM en GB"
            name="ram"
            value={values.ram}
            onChange={handleInputChange}
            ></textarea>
      </div>

      <div className="form-group">
            <textarea
            rows="1"
            className="form-control"
            placeholder="Procesador"
            name="procesador"
            value={values.procesador}
            onChange={handleInputChange}
            ></textarea>
      </div>

      <div class="form-group">
            <label for="ubicacion">Datos de Hardware del Equipo</label>
            <select multiple="" class="form-control" name="tipoDeEquipo" id="tipoDeEquipo" onChange={handleInputChange} values={values.tipoDeEquipo}>
            <option> Tipo de Equipo</option>
            <option> CPU</option>
            <option> Laptop</option>
            </select>
            </div>

        <div className="form-group">
        <textarea
          rows="2"
          className="form-control"
          placeholder="Marca | Modelo | MAC | Codigo del Activo"
          name="description"
          value={values.description}
          onChange={handleInputChange}
        ></textarea>
      </div>

      <div className="form-group">
            <textarea
            rows="1"
            className="form-control"
            placeholder="Numero de Serial"
            name="serial1"
            value={values.serial1}
            onChange={handleInputChange}
            ></textarea>
      </div>

      <label for="textarea2">  Monitor -  Marca | Modelo | MAC | Codigo del Activo</label>
      <div className="form-group">
        <textarea
          rows="2"
          className="form-control"
          placeholder="Marca | Modelo | MAC | Codigo del Activo"
          name="description2"
          value={values.description2}
          onChange={handleInputChange}
        ></textarea>
      </div>

      <div className="form-group">
            <textarea
            rows="1"
            className="form-control"
            placeholder="Numero de Serial"
            name="serial2"
            value={values.serial2}
            onChange={handleInputChange}
            ></textarea>
      </div>    

      <label for="textarea3">  Teclado -  Marca | Modelo | MAC | Codigo del Activo</label> 
      <div className="form-group">
        <textarea
          rows="2"
          className="form-control"
          placeholder="Marca | Modelo | MAC | Codigo del Activo"
          name="description3"
          value={values.description3}
          onChange={handleInputChange}
        ></textarea>
      </div>

      <div className="form-group">
            <textarea
            rows="1"
            className="form-control"
            placeholder="Numero de Serial"
            name="serial3"
            value={values.serial3}
            onChange={handleInputChange}
            ></textarea>
      </div>

      <label for="textarea4">  Mouse -  Marca | Modelo | MAC | Codigo del Activo</label>
      <div className="form-group">
        <textarea
          rows="2"
          className="form-control"
          placeholder="Marca | Modelo | MAC | Codigo del Activo"
          name="description4"
          value={values.description4}
          onChange={handleInputChange}
        ></textarea>
      </div>

      <div className="form-group">
            <textarea
            rows="1"
            className="form-control"
            placeholder="Numero de Serial"
            name="serial4"
            value={values.serial4}
            onChange={handleInputChange}
            ></textarea>
      </div>

      <label for="textarea5">  Adaptador 1 -  Marca | Modelo | MAC | Codigo del Activo</label>
      <div className="form-group">
        <textarea
          rows="2"
          className="form-control"
          placeholder="Marca | Modelo | MAC | Codigo del Activo"
          name="description5"
          value={values.description5}
          onChange={handleInputChange}
        ></textarea>
      </div>

      <div className="form-group">
            <textarea
            rows="1"
            className="form-control"
            placeholder="Numero de Serial"
            name="serial5"
            value={values.serial5}
            onChange={handleInputChange}
            ></textarea>
      </div>

      <label for="textarea6"> Impresora Local -  Marca | Modelo | MAC | Codigo del Activo</label>
      <div className="form-group">
        <textarea
          rows="2"
          className="form-control"
          placeholder="Marca | Modelo | MAC | Codigo del Activo"
          name="description6"
          value={values.description6}
          onChange={handleInputChange}
        ></textarea>
      </div>

      <div className="form-group">
            <textarea
            rows="1"
            className="form-control"
            placeholder="Numero de Serial"
            name="serial6"
            value={values.serial6}
            onChange={handleInputChange}
            ></textarea>
      </div>

      <label for="textarea7">  Telefono -  Marca | Modelo | MAC | Codigo del Activo</label>
      <div className="form-group">
        <textarea
          rows="2"
          className="form-control"
          placeholder="Marca | Modelo | MAC | Codigo del Activo"
          name="description7"
          value={values.description7}
          onChange={handleInputChange}
        ></textarea>
      </div>

      <div className="form-group">
            <textarea
            rows="1"
            className="form-control"
            placeholder="Numero de Serial"
            name="serial7"
            value={values.serial7}
            onChange={handleInputChange}
            ></textarea>
      </div>

      <label for="textarea8">  Regulador -  Marca | Modelo | MAC | Codigo del Activo</label>

      <div className="form-group">
        <textarea
          rows="2"
          className="form-control"
          placeholder="Marca | Modelo | MAC | Codigo del Activo"
          name="description8"
          value={values.description8}
          onChange={handleInputChange}
        ></textarea>
      </div>

      <div className="form-group">
            <textarea
            rows="1"
            className="form-control"
            placeholder="Numero de Serial"
            name="serial8"
            value={values.serial8}
            onChange={handleInputChange}
            ></textarea>
      </div>

      <label for="textarea9">  Otros -  Marca | Modelo | MAC | Codigo del Activo</label>
      <div className="form-group">
        <textarea
          rows="2"
          className="form-control"
          placeholder="Marca | Modelo | MAC | Codigo del Activo"
          name="description9"
          value={values.description9}
          onChange={handleInputChange}
        ></textarea>
      </div>

      <div className="form-group">
            <textarea
            rows="1"
            className="form-control"
            placeholder="Numero de Serial"
            name="serial9"
            value={values.serial9}
            onChange={handleInputChange}
            ></textarea>
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">person_pin</i>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Analista de Soporte"
          value={values.analistaDeSoporte}
          name="analistaDeSoporte"
          onChange={handleInputChange}
        />
      </div>
      
      

      <button className="btn btn-primary btn-block">
        {props.currentId === "" ? "Guardar" : "Editar"}
      </button>
    </form>
    </div>
  );
};

export default LinksForm;
