// Form scripts
window.onload = function () {

  let stateForm = document.querySelector('#state-form');

  let brazilianStates = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

  function generateOptionTag () {
    let optionTag = document.createElement('option');
    return optionTag;
  };
  
  function generateOptionStates (states) {
    let newState = '';
    for (index in states) {
      newState = generateOptionTag();
      newState.innerText = states[index];
      stateForm.appendChild(newState);
    }
  };

  generateOptionStates (brazilianStates)

};