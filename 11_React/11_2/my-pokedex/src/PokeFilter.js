import React from 'react';

class PokeFilter extends React.Component {
  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = ({target}) => {
    const {pokemons} = this.props
    console.log(target.innerText)
    pokemons.filter((pokemon) => pokemon.type === target.innerText)
  }

  render() {

    return (
      <div>
        <button onClick={this.handleClick}>Fire</button>
      </div> 
    )
  }
}

export default PokeFilter;