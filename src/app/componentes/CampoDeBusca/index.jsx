import Image from 'next/image'
import Lupa from '@/../public/icons/lupa.png'
import estilos from './campo.module.sass'

export default function CampoDeBusca({ buscarPorNomeDesc, textoDigitado }){
    return(
        <div className={estilos.campo}>
            <Image src={Lupa} alt='icone de lupa'/>
            <input value={textoDigitado} type="text" onChange={(event) => buscarPorNomeDesc(event.target.value)} placeholder='Pesquise aqui um dos pratos do nosso cardápio'/>
        </div>
    );
}