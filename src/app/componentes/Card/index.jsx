import Image from 'next/image'
import estilos from './card.module.sass'

export default function Card(props){
    return(
        <div className={estilos.card}>
            <figure className={estilos.cardImage}>
                <Image src={props.img} alt='imagem do prato'/>
            </figure>
            
            <div className={estilos.cardContent}>
                <div>
                    <h3>{props.nome}</h3>
                    <small>{props.categoria}</small>
                    <p>{props.descricao}</p>
                </div>
                <div>
                    <span>R$ {props.preco}</span>
                </div>
            </div>
        </div>
    );
}