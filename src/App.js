import React from 'react';
import './App.css';
import styled from 'styled-components';
import {Home} from './components/Home/card';
import Filtro from './components/Filtro/Filtro';
import Carrinho from './components/Carrinho/Carrinho'
import imagem1 from './imagem/1.png';
import imagem2 from './imagem/2.png';
import imagem3 from './imagem/3.png';
import imagem4 from './imagem/4.png';
import imagem5 from './imagem/5.png';
import imagem6 from './imagem/6.png';
import imagem7 from './imagem/7.png';
import imagem8 from './imagem/8.png';


const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 15px;
  margin: 0;
  background: rgb(131,58,180);
  background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(148,54,159,1) 14%, rgba(224,36,65,1) 100%, rgba(252,176,69,1) 100%, rgba(253,29,29,1) 100%);
 `
  const produtos = [
  {
    id: 1,
    titulo: 'Camiseta Feminina',
    custo:  80,
    image: imagem3,
  },
  {
    id: 2,
    titulo: 'Camiseta Masculina',
    custo: 80,
    image: imagem5
  },
  {
    id: 3,
    titulo: 'Camiseta Feminina',
    custo: 80,
    image: imagem4
  },
  {
    id: 4,
    titulo: 'Blusa Feminina',
    custo: 400,
    image: imagem1
  },
  {
    id: 5,
    titulo: 'Camiseta Masculina',
    custo: 300,
    image: imagem6
  },
  {
    id: 6,
    titulo: 'Blusa Feminina',
    custo: 350,
    image: imagem2
  },
  {
    id: 7,
    titulo: 'Blusa Masculina',
    custo: 450,
    image: imagem7
  },
  {
    id: 8,
    title: 'Blusa Masculina',
    custo: 500,
    image: imagem8
  }
]

export default class App extends React.Component {
  state = {
    quantidade:0,
    FiltroMinimo: '',
    FiltroMaximo: '',
    FiltroNome: '',
    produtosNoCarrinho: []
  }


  onChangeFiltroMinimo = (event) => {
    this.setState({FiltroMinimo: event.target.value})
  }

  onChangeFiltroMaximo = (event) => {
    this.setState({FiltroMaximo: event.target.value})
  }

  onChangeFiltroTitulo = (event) => {
    this.setState({FiltroNome: event.target.value})
  }

  onAddprodutoToCart = (produtoId) => {
    const produtoNoCarrinho = this.state.produtosNoCarrinho.find(produto => produtoId === produto.id)

    if(produtoNoCarrinho){
      const novoprodutosNoCarrinho = this.state.produtosNoCarrinho.map(produto => {
        if(produtoId === produto.id) {
          return{
            ...produto,
            quantidade: produto.quantidade + 1
          }
        }
        return produto
      })
      this.setState({produtosNoCarrinho: novoprodutosNoCarrinho})
    } else {
      const produtoToAdd = produtos.find(produto => produtoId === produto.id)
      const novoprodutosNoCarrinho = [...this.state.produtosNoCarrinho, {...produtoToAdd, quantidade: 1}]

      this.setState({produtosNoCarrinho: novoprodutosNoCarrinho})
    }
  }

  onRemoverProdutoDoCarrinho = (produtoId) => {
    const novoprodutosNoCarrinho = this.state.produtoNoCarrinho.map((produto) => {
      if(produto.id === produtoId) {
        return {
          ...produto,
          quantidade: produto.quantidade - 1
        }
      }
      return produto
    }).Filtro((produto) => produto.quantidade > 0)

    this.setState({produtosNoCarrinho: novoprodutosNoCarrinho})
  }

  render() {
    return (
      <AppContainer>
        <Filtro 
        FiltroMaximo = {this.state.FiltroMaximo}
        FiltroMinimo = {this.state.FiltroMinimo}
        FiltroNome = {this.state.FiltroNome}
        onChangeFiltroMaximo = {this.onChangeFiltroMaximo}
        onChangeFiltroMinimo = {this.onChangeFiltroMinimo}
        onChangeFiltroTitulo = {this.onChangeFiltroTitulo}      
        />
        <Home    
          produtos={produtos}
          FiltroMinimo={this.state.FiltroMinimo}
          FiltroMaximo={this.state.FiltroMaximo}
          FiltroNome={this.state.FiltroNome}
          onAddprodutoToCart={this.onAddprodutoToCart}/>
        <Carrinho 
          produtos={this.state.produtosNoCarrinho}
          onRemoverProdutoDoCarrinho ={this.onRemoverProdutoDoCarrinho}
        /> 
      </AppContainer>
    );
  }
}