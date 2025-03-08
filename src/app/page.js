'use client'
import estilos from "./page.module.sass";
import Categorias from "./componentes/Categorias";
import CampoDeBusca from "./componentes/CampoDeBusca";
import Card from "./componentes/Card"
import { useState } from "react";
import { filtarPorCategoria, filtarPorNomeDesc } from '@/app/servico/index.js'

export default function Home(){
  const [produtos, setProdutos] = useState(filtarPorCategoria("Entradas"));
  const [categoria, setCategoria] = useState("Entradas");
  const [textDigitado, setTextDigitado] = useState("");

  function buscarPorCategoria(categoria){
    setTextDigitado("")
    setCategoria(categoria)
    setProdutos(filtarPorCategoria(categoria))
}

  function buscarPorNomeDesc(textDigitado){
    setTextDigitado(textDigitado)
    textDigitado.length >= 3 && setProdutos(filtarPorNomeDesc(textDigitado))
    setCategoria("")
  }

  return(
    <div className={estilos.home}>
    <header className={estilos.banner}>
      <div className={estilos.bannerText}>
        <h1>RESTAURANT</h1>
        <p>De pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sabores refinados</p>
      </div>
    </header>
    <main className={estilos.container}>
      <Categorias buscarPorCategoria={buscarPorCategoria} categoria={categoria}/>
      <CampoDeBusca buscarPorNomeDesc={buscarPorNomeDesc} textoDigitado={textDigitado}/>
      <section className={estilos.secaoCards}>
            <h2>Cardápio</h2>
            <div className={estilos.containerCards}>
                {
                produtos.map(
                    (produto, index) => <Card key={index} nome={produto.nome} categoria={produto.categoria} preco={produto.preco} descricao={produto.descricao} img={produto.imagem}/>
                )}
            </div>
        </section>
    </main>
    </div>
  );
}