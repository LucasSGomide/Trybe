import React from 'react';

class Pokemon extends React.Component {
  render() {

    const {id, name, type, averageWeight, image, moreInfo} = this.props

    return (
      <div className = 'poke-container'>
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>{averageWeight.value}kg</p>
        </div>
        <div>
          <img src={image} alt="Amem"></img>
        </div>
      </div>
    )
  }
}

export default Pokemon;