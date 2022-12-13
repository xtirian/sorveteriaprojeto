import React from "react";
import Footer from "../../components/Footer";
import Cabecalho from "../../components/Topo";
import './style.css'

function PaginaSabores() {
    return (
        <div>
            <Cabecalho />
            <main>
                <section className="banner-sabores">
                    <div>
                        <h1>NOSSOS SABORES</h1>
                    </div>
                </section>
                <section className="limitar-secao sabores-container">
                    <h2>SABORES DE SORVETE</h2>
                    <div className=" sabores-grade">
                        <div className="card">
                            <img src="/assets/sabor-oreo.png" alt="sabor-oreo" />
                            <div>
                                <h3>Sorvete de Oreo</h3>
                                <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src="/assets/sabor-pistache.png" alt="sorvete-pistache" />
                            <div>
                                <h3>Sorvete Pistache</h3>
                                <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src="/assets/sabor-cookies-avela.png" alt="cookies-avela" />
                            <div>
                                <h3>Sorvete Cookies & Avelã</h3>
                                <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                            </div>    
                        </div>                        <div className="card">
                            <img src="/assets/sorbet-kiwi.png" alt="orvete-kiwi" />
                            <div>
                                <h3>Sorvete de Kiwi</h3>
                                <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                            </div>    
                        </div>
                        <div className="card">
                            <img src="/assets/sorbet-morango.png" alt="sorvete-morango" />
                            <div>
                                <h3>Sorvete de Morango</h3>
                                <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                            </div>    
                        </div>
                        <div className="card">
                            <img src="/assets/sorbet-limao.png" alt="sorvete-limao"/>
                            <div>
                                <h3>Sorvete de Limão Siciliano</h3>
                                <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                            </div>    
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default PaginaSabores