import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import NovoChamado from './pages/criarChamado';


export default function Navegacao(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/criarChamado' element={<NovoChamado/>}/>
            </Routes>
        </BrowserRouter>
    )
}