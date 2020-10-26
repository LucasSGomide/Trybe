import { connect } from 'react-redux';
import React from 'react';

class FormChecker extends React.Component {
  render() {

    const { name } = this.props;

    return(
      <div>
        <span>Nome: { name }</span>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  name: state.reducer.forms.name,
})

export default connect(mapStateToProps)(FormChecker);
