'use client'
import Image from 'next/image'
import imgEntrada from '@/../public/icons/entrada.png'
import imgMassas from '@/../public/icons/massa.png'
import imgCarne from '@/../public/icons/carne.png'
import imgBebidas from '@/../public/icons/bebidas.png'
import imgSaladas from '@/../public/icons/salada.png'
import imgSobremesas from '@/../public/icons/sobremesa.png'
import estilos from './categorias.module.sass'

export default function Categorias({ buscarPorCategoria, categoria }){
    return(
        <section className={estilos.secaoCategorias}>
            <button className={categoria == "Entradas" ? estilos.btnActivate : estilos.btnDesable} onClick={() => buscarPorCategoria("Entradas")}>
                <Image className={estilos.icon} src={imgEntrada} alt='icone botão entrada'/>
                <span>Entradas</span>
            </button>

            <button className={categoria == "Massas" ? estilos.btnActivate : estilos.btnDesable} onClick={() => buscarPorCategoria("Massas")}>
                <Image className={estilos.icon} src={imgMassas} alt='icone botão massas'/>
                <span>Massas</span>
            </button>

            <button className={categoria == "Carnes" ? estilos.btnActivate : estilos.btnDesable} onClick={() => buscarPorCategoria("Carnes")}>
                <Image className={estilos.icon} src={imgCarne} alt='icone botão carne'/>
                <span>Carnes</span>
            </button>

            <button className={categoria == "Bebidas" ? estilos.btnActivate : estilos.btnDesable} onClick={() => buscarPorCategoria("Bebidas")}>
                <Image className={estilos.icon} src={imgBebidas} alt='icone botão bebidas'/>
                <span>Bebidas</span>
            </button>
            
            <button className={categoria == "Saladas" ? estilos.btnActivate : estilos.btnDesable} onClick={() => buscarPorCategoria("Saladas")}>
                <Image className={estilos.icon} src={imgSaladas} alt='icone botão saladas'/>
                <span>Saladas</span>
            </button>

            <button className={categoria == "Sobremesas" ? estilos.btnActivate : estilos.btnDesable} onClick={() => buscarPorCategoria("Sobremesas")}>
                <Image className={estilos.icon} src={imgSobremesas} alt='icone botão sobremesas'/>
                <span>Sobremesas</span>
            </button>
        </section>
    );
}