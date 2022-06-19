import React from 'react';
import styled from 'styled-components';

const Cart = styled.div `
    border: 1px solid black;
    display: flex;
    align-content: space-between;
    padding-top: 2vh;
    align-items: center;
    justify-content: flex-start;
    height:100vh;
    flex-direction: column;
`
const TituloCarrinho = styled.h3 `
    text-align:center;
    color: black;
    margin-top: 24px;
`
const Produto = styled.div `
    display: flex;
    margin-top: 24px;
    align-content: space-between;

`
const Quantidade = styled.p `
    padding-right: 10px;    
`
const NomeDoProduto = styled.p `
    padding-right: 10px;    
`
const Remover = styled.button `
    height:24px;
    width:24px;
    margin-top:2vh;
    background-color: white;
    padding-bottom:8px;
    font-size: 1.5em;
    text-align:center;
    font-weight:bolder;
`
const TotalValue = styled.div `
    margin-top: 5vh;
    color: black;
    font-weight:bolder;
`

export default class Carrinho extends React.Component {
    getTotalValue = () => {
        let totalValue = 0
        for(let produto of this.props.produtos) {
          totalValue += produto.custo * produto.quantidade    
        }
        return totalValue
    }
    render() {
        return (
            <Cart>
                <TituloCarrinho>Carrinho</TituloCarrinho>
                {
                      this.props.produtos.map(item => (
                        <Produto>
                            <Quantidade>{item.quantidade}</Quantidade>
                            <NomeDoProduto>{item.titulo}</NomeDoProduto>
                            <button onClick={()=>this.onRemoverProdutoDoCarrinho}>Remover</button>
                            {/* <button onClick={this.props(this, id)}>Deletar linha</button> */}
                        </Produto>
                ))
                }
                <TotalValue>Valor total: R${this.getTotalValue()}</TotalValue>
            </Cart>
        );
    }
}