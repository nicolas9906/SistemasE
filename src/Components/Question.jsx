import React,{   useEffect, useState } from "react";
import "./Question.css"
import { useAgregarStore } from "../hooks/useAgregarStore";
import  axios  from "axios";
import Swal from 'sweetalert2'

export const Question = () =>  {
const{agregar, startLoadingAgregar } = useAgregarStore();
const [result, setResult] = useState('');

useEffect (()=>{
  startLoadingAgregar()
},[])
let R;
const [ datos,setDatos] = useState('');

useEffect(() => {
  // Realiza la solicitud GET y almacena los datos en el estado
  axios.get('http://localhost:4000/derechos/Listar')
    .then((response) => {
      setDatos(response.data);
    })
    .catch((error) => {
      console.error('Error al obtener datos:', error);
    });
}, []);
// console.log(datos);

 
const [text, setText] = useState('');
const [words,setWords]= useState([]);
const[descripcion,setDescripcion]= useState([]);



const handleTextChange = (event) => {
  const newText = event.target.value;
  setText(newText);

  const wordsArray = newText.split(' ');

  setWords(wordsArray);
 
  
  //word para separar el parrafo en palabras

};

let id;
let descrip;



// const coincidenciasPorID= {};

// comparar.forEach((elemento) => {
//   const palabrasEnDescripcion = elemento.descripcion.split(' ');
//         const coincidencias = prueba.filter((palabra) =>
//           palabrasEnDescripcion.includes(palabra)
//         ).length;
//         coincidenciasPorID[elemento.id] = coincidencias;
    
  
// });


  const compareText = (e) => {
    let prueba=words;

let comparar;
let winner;
let maxCommonWords = 0; // Variable para rastrear el máximo número de coincidencias
let idWithMostCommonWords = null;

for (const iterator of datos) {
  
  const id = iterator.id_derechos_fundament;
 
  comparar = iterator.descripcion;
 const commonWords = prueba.filter((word) => comparar.includes(word));
 if (commonWords.length > maxCommonWords) {
  // Si encontramos un nuevo máximo número de coincidencias, actualizamos las variables
  maxCommonWords = commonWords.length;
  idWithMostCommonWords = id;
  
}

console.log(`ID: ${id}, Palabras en común: ${commonWords.join(', ')}`);
}

console.log(`El ID con más coincidencias es: ${idWithMostCommonWords}`);
 winner = idWithMostCommonWords
console.log(datos);
Swal.fire({
  title: 'Artículo',
  html: `<p>ID: ${idWithMostCommonWords}</p><pre>${JSON.stringify(datos, null, 2)}</pre>`,
  icon: 'success'
});

console.log(winner);
const articulo = winner;
}

   
  




return (
    <>

<br/>
<br/>
<br/>
    <div className="form">

   
    <h2>Comentanos tu caso </h2>
   
      <div className="box">
  
 
  <br/>
  <label>

      <textarea value={text}
      name="inputText" rows={5} cols={40} 
      onChange={handleTextChange}
      placeholder="Escribe tu texto aquí"
      />

    
    <br/>
 
    <button onClick={(e) => compareText()}>Enviar</button>
    </label>
</div>
</div>
    {/* <ul>
          {words.map((word, index) => (
            <li key={index}>{word}</li>
          ))}
        </ul>
        <p>... {result}</p>
  </div>


</div>
<table className="table table-bordered border-success">
                    <thead className="table-dark">
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Número de artículo</th>
                        <th scope="col">Descripción del Derecho Fundamental</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {agregar.map((agregar) =>(
                        
                            <tr key={agregar.id_derechos_fundament}>                         
                            <td></td>
                            <td>{agregar.der_num_articulo}</td>
                            <td>{agregar.descripcion}</td>
                         
                            <td>
                                <button className='btn btn-danger'><i className="bi bi-trash"></i></button>
                            </td>
                            
                            </tr>
                            
                          ) )
                        }
                        
                    </tbody>
                </table>           */}
    </>
    )
}