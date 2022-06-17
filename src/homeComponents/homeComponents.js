import React, { Component } from 'react'
import styledComponents from 'styled-components'

export default class HomeComponents extends Component {
  render() {
    state = {
      
    }
    return (
      <div>
        <div className = "cabecalho">
          <p>Quantidade de produtos:</p>
          <p>Ordenação:</p>
        </div>
        <div className ="listaProdutos">
          <div className='card'>
            <img/>
          </div>
          <div className='card' >
          <img src="https://picsum.photos/200/200?a=1"/>
          </div>
          <div className='card'>
          <img src="https://picsum.photos/200/200?a=2" />
          </div>
          <div className='card'>
          <img src="https://picsum.photos/200/200?a=3"/>
          </div>
          <div className='card'>
          <img src="https://picsum.photos/200/200?a=4" />
          </div>
          <div className='card'>
          <img src="https://picsum.photos/200/200?a=5" />
          </div>
          <div className='card'>
          <img src="https://picsum.photos/200/200?a=6" />
          </div>
          <div className='card'>
          <img src="https://picsum.photos/200/200?a=7" />
          </div>
          <div className='card'>
          <img src="https://picsum.photos/200/200?a=8" />
          </div>
          <div className='card'>
          <img src="https://picsum.photos/200/200?a=9" />
          </div>
          <div className='card'>
          <img src="https://picsum.photos/200/200?a=10" />
          </div>
        </div>
      </div>
    )
  }
}
