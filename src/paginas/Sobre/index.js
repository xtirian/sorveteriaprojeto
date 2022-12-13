import React from "react";
import Cabecalho from "../../components/Topo";
import Footer from "../../components/Footer"
import "./style.css"

function PaginaSobre () {
    return(
        <div>
            <Cabecalho />
            <main>
                <section className="banner-sobre">
                    <h1>A GELATERIA</h1>
                </section>
                <section className="sobre-text">
                    <div className="limitar-secao">
                        <h2>Sobre Nós</h2>
                        <h3>Nós simplesmente amamos sorvete</h3>

                        <p>Somos ums empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.</p>
                        <p>Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja, ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos poporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.</p>
                    </div>
                </section>
                <section className="sobre-showindows">
                    <img src="/assets/sobre-image.jpg" alt="sobre-imagem" />
                    <img src="/assets/sorveteria.jpg" alt="loja-imagem" />
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default PaginaSobre