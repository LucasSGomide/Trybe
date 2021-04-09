import React from 'react';
import Pokemon from './Pokemon';
import PokeButton from './PokeButton';


class PokemonList extends React.Component {
  constructor(props) {
    super();

    this.handleFilterAll = this.handleFilterAll.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleIndex = this.handleIndex.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      numberOfClicks: 0,
      pokemons: props.pokemons,
    }
  }

  handleIndex = () => {
    const { numberOfClicks, pokemons } = this.state 
    console.log(numberOfClicks)
    if (numberOfClicks >= pokemons.length - 1) {
      this.setState({ numberOfClicks: 0 })
    }
  }

  handleClick = (event) => {
    event.persist()
    this.setState((previousState) => ({
      numberOfClicks: previousState.numberOfClicks + 1
    }), this.handleIndex())
  }

  handleFilter = ({ target }) => {
    const { pokemons } = this.props
    this.setState ({
      pokemons: pokemons.filter((pokemon) => pokemon.type === target.innerText),
      numberOfClicks: 0,
    })
  }

  handleFilterAll() {
    const { pokemons } = this.props;
    this.setState ({
      pokemons: pokemons,
      numberOfClicks: 0,
    })
  }

  render() {
    const { numberOfClicks, pokemons } = this.state
    return (
      <div className='poke-list'>
        { 
          <Pokemon
          key={pokemons[numberOfClicks].id}
          name={pokemons[numberOfClicks].name}
          type={pokemons[numberOfClicks].type}
          averageWeight={pokemons[numberOfClicks].averageWeight}
          image={pokemons[numberOfClicks].image}
          />
        }
        <button onClick={this.handleClick}>Next Pokemon</button>
        {
        <div>
          <PokeButton handleFilter={this.handleFilter} pokeType={'Fire'} />
          <PokeButton handleFilter={this.handleFilter} pokeType={'Psychic'} />
          <PokeButton handleFilter={this.handleFilter} pokeType={'Normal'} />
          <PokeButton handleFilter={this.handleFilter} pokeType={'Dragon'} />
          <PokeButton handleFilter={this.handleFilter} pokeType={'Poison'} />
          <PokeButton handleFilter={this.handleFilter} pokeType={'Bug'} />
          <PokeButton handleFilter={this.handleFilter} pokeType={'Electric'} />
          <PokeButton handleFilter={this.handleFilterAll} pokeType={'All'} />
        </div> 
        }
      </div>
    )
  }
}

export default PokemonList;