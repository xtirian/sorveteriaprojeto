import React from "react";
import './style.css'


function Footer() {
    return(
        <footer>
            <sections className="informacoes">
                <img src="assets/logo.png" alt='logo'/>
                <div className="infocard">
                    <h4>ENDEREÇO</h4>
                    <p>Av. Bernardino de Campos, 98<br /> São Paulo, SP 12345-678</p>
                </div>
                <div className="infocard">
                    <h4>CONTATO</h4>
                    <p>info@meusite.com <br/> Tel: (11) 3456-7890</p>
                </div>
                <div className="infocard">
                    <h4>HORÁRIOS</h4>
                    <p>ABERTO TODOS OS DIAS<br/>10:00 - 22:00</p>
                </div>
            </sections>
            <section className="Copyrights"><p>Gelateria. Orgulhosamente desenvolvido por "xTirian"</p></section>
        </footer>
    )
}

export default Footer