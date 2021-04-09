import React from 'react';

class PokeButton extends React.Component {
  render() {

    const { pokeType, handleFilter} = this.props

    return (
      <div>
        <button onClick={handleFilter}>{pokeType}</button>
      </div>
    )
  }
}

export default PokeButton;