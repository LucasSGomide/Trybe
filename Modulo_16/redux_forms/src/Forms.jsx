import { connect } from 'react-redux';
import { textInput } from './actions';
import React from 'react';

class Forms extends React.Component {
  render() {

    const { inputValue } = this.props;

    return (
      <div>
        <h1>Hello World</h1>
        <fieldset>
          <label> Name
            <input onChange={ ({ target }) => inputValue('name', target.value) } type='text'/>
          </label>
          <label> Email
            <input onChange={ ({ target }) => inputValue('email', target.value) } type='text'/>
          </label>
        </fieldset>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  inputValue: (name, value) => dispatch(textInput(name, value)),
})

export default connect(null, mapDispatchToProps)(Forms);
