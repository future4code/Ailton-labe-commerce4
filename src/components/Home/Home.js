import React from 'react';
import styled from 'styled-components';
import {FiltrosHome} from './FiltrosHome'

const HomeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    margin-bottom: -80px;
    background-color: gray;
    margin-right: 20px;
    margin-left: 20px;
`
const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    grid-auto-rows: minmax(200px, 50%);
    padding: 100px 20px;
`
const InputContainer = styled.div`    
    margin-right: 20px;
    
`
const ProdutoQuantidade = styled.p`   
    margin-left: 20px;
    color: white;
`
const SelectContainer = styled.select`
  background-color: white;
  color: black;
  padding: 6px 10px;
`
const OptionContainer = styled.option`
  background-color: rgba(0, 0, 0, 0.1);
  color: white;
`
const LabelWhite = styled.label`
    color: white;
`

export class Home extends React.Component {
    state = {
        sort: "decrescente"

    };

    getFilteredAndOrderedList = () => {
        return this.props.produtos
            .filter((produto) => this.props.FiltroMaximo? produto.custo < this.props.FiltroMaximo : true)
            .filter((produto) => this.props.FiltroMinimo ? produto.custo > this.props.FiltroMinimo : true)
            .filter((produto) => this.props.FiltroNome ? produto.title.includes(this.props.FiltroNome) : true)
            .sort((a, b) => this.state.sort === "crescente" ? a.custo - b.custo : b.custo - a.custo)
    }

    
    onChangeSort = (event) => {
        this.setState({sort: event.target.value});
    }
    
    render(){
        const filteredAndOrderedList = this.getFilteredAndOrderedList()
        return( 
            <div>
                <HomeContainer>
                    <produtoQuantity>Quantidade de produtos: {filteredAndOrderedList.length}</produtoQuantity>
                    <InputContainer>    
                        <LabelWhite>
                            Ordenação:  
                            <SelectContainer value={this.state.sort} onChange={this.onChangeSort}>
                                <OptionContainer value="crescente">Crescente</OptionContainer>
                                <OptionContainer value="decrescente">Decrescente</OptionContainer>
                            </SelectContainer>
                        </LabelWhite>
                    </InputContainer>
                </HomeContainer>

                <Container>
                    {filteredAndOrderedList.map((produto)=> {
                        return <FiltrosHome
                        produto={produto}
                        onAddprodutoToCart={this.props.onAddprodutoToCart}
                       />
                    })}
                </Container>
            </div>
        );
    }
}