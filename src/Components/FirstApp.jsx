
import "./FirstApp.css";
import React, { useState, useEffect } from "react";

import { useAgregarStore } from "../hooks/useAgregarStore"; 
    
export const FirstApp = ()=>  {

  const [ formSubmitted, setFormSubmitted ] = useState(false);
  const { activeAgregar, startSavingAgregar } = useAgregarStore();

      const [formValues, setFormValues] = useState( { 
        der_num_articulo: '',
              descripcion: '',
  
                  } );



      const { der_num_articulo, descripcion } = formValues;
      const [ der_num_articuloValid, setder_num_articuloValid ] = useState(true);
      const [ descripcionValid, setDescripcionValid ] = useState(true);

      const handleInputChange = ({target}) =>{
        setFormValues({
            ...formValues,
            [target.name]:target.value,
            
        });
    }
      

  const handleSubmitForm =  async(e) =>{
    e.preventDefault();
    setFormSubmitted(true);


   await startSavingAgregar( formValues );
   setFormSubmitted(false);

};
    return (
    <>

<br/>
<br/>
<br/>
    <div className="form">
    <h2>Derechos fundamentales</h2>
    <form
    onSubmit={handleSubmitForm}
    >
      <div className="box">
 
    Numero:
    <input 
            type="int" 
            className={`form-control ${ !der_num_articuloValid && 'is-invalid' }`}
            placeholder="Título"
            name="der_num_articulo"
            rows={5} cols={40}
            onChange={handleInputChange}
            autoComplete="off"
        />
        <br/>
        <div className="form-group mb-2">
        <textarea 
            type="text" 
            className={`form-control ${ !descripcionValid && 'is-invalid' }`}
            placeholder="Descripcion"
            rows="5"
            name="descripcion"
            value={descripcion}
            onChange={handleInputChange}
        ></textarea>
        
    </div>


    <button
        type="submit"
        className="btn btn-outline-primary btn-block"
    >
        <i className="far fa-save"></i>
        <span> Guardar</span>
    </button>
  </div>
</form>
</div>
    </>
    )
}
