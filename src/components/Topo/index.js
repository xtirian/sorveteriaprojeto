import React from "react";
import './style.css'
import { Link } from 'react-router-dom';


function Cabecalho() {
    return(
        <header>
            <div className="limitar-secao containerTopo">
                <img src="assets/logo.png" alt="logo" className="logo" />

                <nav>                
                    <Link className="Home linkRoute" to="/">Home</Link>
                    <Link className="Sabores linkRoute" to="/sabores">Sabores</Link>
                    <Link className="Sobre linkRoute" to="/sobre">Sobre</Link>
                </nav>
            </div>
        </header>
    )
}

export default Cabecalho