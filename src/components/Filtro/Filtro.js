import React from 'react';
import styled from 'styled-components';


const Border = styled.div`
    border: 1px solid black;
    display:flex;
    align-items:center;
    flex-direction:column;
    padding: 20px;
    height:60vh;
`;
const DivLabel = styled.label`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;    
   
`;

const Title = styled.h3`
    color: black;
`
const InputContainer = styled.input`
    border: 2px solid black;
    padding: 6px 6px;
    margin: 8px 0;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid black;
    background-color:white;
   
`
    
export default class Filter extends React.Component {
    render() {
        return (
            <div>
                <Border>
                    <Title>Filtros de produtos</Title>
                    <DivLabel>
                        <InputContainer 
                            placeholder="Valor Mínimo"
                            type="number" 
                            min="0"
                            value={this.props.FiltroMinimo}
                            onChange={this.props.onChangeFiltroMinimo}
                            >                                
                            </InputContainer>
                    </DivLabel>
                    <DivLabel>
                        <InputContainer
                            placeholder="Valor Máximo"
                            type="number"
                            min="0"
                            value={this.props.FiltroMaximo}
                            onChange={this.props.onChangeFiltroMaximo}                            
                            ></InputContainer>
                    </DivLabel>
                    <DivLabel>
                        <InputContainer
                            placeholder="Buscar " 
                            type="text"
                            value={this.props.FiltroNome}
                            onChange={this.props.onChangeFiltroNome}                                               
                            ></InputContainer>
                    </DivLabel>                                        
                </Border>                
            </div>
        );
    }
}