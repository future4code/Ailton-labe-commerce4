import React, { Component } from 'react'
import styled from 'styled-components'
import imagem1 from "./roupas/camiseta-masculina1"

const Container = styled.div`
border: 1px solid black;
display: flex;
flex-direction: column;
width: 250px;
height: 350px;
`
const TituloCusto = styled.div`
display: flex;
justify-content: space-between;
padding: 6px;
`
// const TituloCustoBotao = styled.div`
// align-items: flex-end;
// `

export default class Card extends Component {
  render() {
    const produtos = [
      { id: 0, titulo: "Camiseta Masculina 1", imagem: "", custo: 100 },
      { id: 1, titulo: "camiseta Masculina 2", imagem: "", custo: 100 },
      { id: 2, titulo: "camiseta Feminina 1", imagem: "", custo: 100 },
      { id: 3, titulo: "camiseta Feminina 2", imagem: "", custo: 100 },
      { id: 4, titulo: "Moletom 1", imagem: "", custo: 100 },
      { id: 5, titulo: "Moletom 2", imagem: "", custo: 100 },
      { id: 6, titulo: "Moletom Cropped 1", imagem: "", custo: 100 },
      { id: 7, titulo: "Moletom Cropped 2", imagem: "", custo: 100 }
    ];

    const listaProdutos = produtos.map((produto) => {
      return (
        <Container key={produto.id}>
          <p>{produto.imagem}</p>


          <TituloCustoBotao>

            <TituloCusto>
              <p>{produto.titulo}</p>
              <p>R${produto.custo},00</p>
            </TituloCusto>

            <button >Adicionar ao carrinho</button>
          </TituloCustoBotao>
          
        </Container>
      )
    })

    return (
      <div>
        <p>{listaProdutos}</p>

      </div>
    )
  }
}


