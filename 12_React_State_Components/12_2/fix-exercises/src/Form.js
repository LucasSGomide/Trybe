import React from 'react'

class Form extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      name: '',
      email: '',
      aboutMe: '',
      options: ''
    }

  }

  handleChange = ({target}) => {

    const { name } = target;

    this.setState({
      [name]: target.value
    })
  }

  render() {
    return (
      <form>
        <fieldset>
          <legend>Formulário do milho:</legend>
          <label>
            Nome:
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange}></input>
          </label>
          <label>
            Email:
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange}></input>
          </label>
          <label>
            Sobre mim:
            <textarea name="aboutMe" value={this.state.aboutMe} onChange={this.handleChange}></textarea>
          </label>
          <label>
            O que você prefere ?
            <select name="options" value={this.state.options} onChange={this.handleChange}>
              <option>Levar ferro até em Tupi</option>
              <option>Levar pau até em Juá</option>
            </select>
          </label>
          <label>
            Adicione sua foto:
            <input type="file"></input>
          </label>
          </fieldset>
      </form>
    )
  }
}

export default Form;