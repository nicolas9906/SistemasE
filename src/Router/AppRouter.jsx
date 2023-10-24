import { Route, Routes } from 'react-router-dom';
import { Question } from '../Components/Question';
import { Navbar } from '../Components/Navbar/Navbar';
import { FirstApp } from '../Components/FirstApp';


export const AppRouter = () =>{

    return(
        <>

        <Navbar/>
        <div className='container'>
        <Routes>
        <Route path='/preguntas' element={<Question/>} />
        <Route path='/formulario' element={<FirstApp/>} />


        </Routes>
        </div>
        </>
    )
}