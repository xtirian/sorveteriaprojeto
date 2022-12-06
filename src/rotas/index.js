import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PaginaHome from "../paginas/home";
import PaginaSabores from "../paginas/sabores";
import PaginaSobre from "../paginas/Sobre";

function CaminhoDasIndias() {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={ <PaginaHome />} />
                <Route path="/sabores" element={ < PaginaSabores/>} />
                <Route path="/sobre" element={ <PaginaSobre /> }/>
            </Routes>            
        </BrowserRouter>
    )
}

export default CaminhoDasIndias