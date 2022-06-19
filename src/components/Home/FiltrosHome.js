import React from 'react';
import styled from 'styled-components';

const MediaBox = styled.div `
    display: flex;
    flex-direction: column;
   
`
const AddAoCarrinho = styled.button`
    align-self: center;
    margin-top: 8px;
    margin-bottom: 16px;
    background-color: gray;
    color: white;
    
`
const Title = styled.div`
    text-align: center;
    color: black;

`

const ImgContainer = styled.img`
    width: 100%;
`
const ContainerDiv = styled.div`
`

export class CardsHome extends React.Component {

    render(){
        const produto = this.props.produto
        return <ContainerDiv>
                <MediaBox>
                    <ImgContainer src={produto.image} alt={produto.title} width="170" height="200"/>
                    <Title><b><i>{produto.title}</i></b></Title>
                    <custo><b>R${produto.custo},00</b></custo>
                    <AddAoCarrinho onClick={() => this.props.onAddprodutoToCart(produto.id)}>
                        Adicionar ao carrinho
                    </AddAoCarrinho>
                </MediaBox>
            </ContainerDiv>
    }
}

