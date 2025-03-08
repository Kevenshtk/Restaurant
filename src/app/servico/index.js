import { produtos } from "../data/data_produtos";

export function filtarPorCategoria(categoria){
    return produtos.filter(produto => produto.categoria === categoria);
}

export function filtarPorNomeDesc(texto){
    return produtos.filter(produto => produto.nome.toLowerCase().includes(texto.toLowerCase()) || 
    produto.descricao.toLowerCase().includes(texto.toLowerCase()))
}