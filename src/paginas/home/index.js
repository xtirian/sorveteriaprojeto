import React from "react";
import Footer from "../../components/Footer";
import Cabecalho from "../../components/Topo";
import "./style.css"

function PaginaHome() {
    return (        
        <div>
            <Cabecalho />
            <main>
                <section className="limitar-secao, section-banner">
                    <div className="banner-container">
                        <h1>SORVETE ARTESANAL</h1>
                    </div>
                </section>
                <section className="sabores banner-grade">
                    <img src="assets/banner-sabores.jpg" alt="banner-sabores" className="grade-img"/>
                    <div>
                        <h2>NOSSOS SABORES</h2>
                        <h3>Novos e deliciosos!</h3>
                        <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
                    </div>
                </section>
                <section className="eventos banner-grade">
                    <div>
                        <h2>NOSSOS EVENTOS</h2>
                        <h3>Delicias com sorvete!</h3>
                        <p>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.</p>
                    </div>
                    <img src="assets/eventos-image.jpg" alt="banner-eventos" className="grade-img"/>                    
                </section>
                <section className="sobre banner-grade">
                    <img src="assets/banner-sobre.png" alt="banner-sobre" className="grade-img"/>
                    <div>
                        <h2>SOBRE NÓS</h2>
                        <h3>Alegria em cada casquinha!</h3>
                        <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.</p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default PaginaHome