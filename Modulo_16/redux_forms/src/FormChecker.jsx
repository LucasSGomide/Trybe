import { connect } from 'react-redux';
import React from 'react';

class FormChecker extends React.Component {
  render() {
    const { name, email } = this.props;

    return(
      <div>
        <p>Nome: { name }</p>
        <p>Email: { email }</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  name: state.reducer.name,
  email: state.reducer.email,
})

export default connect(mapStateToProps)(FormChecker);
