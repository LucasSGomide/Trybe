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

  let submitForm = document.querySelector('#submit-form-button');
  let dateForm = document.querySelector('#starting-date-form');
  let applicationForm = document.querySelector('.application-form');
  let formConfirmation = document.querySelector('.form-confirmation');

  submitForm.addEventListener('click', function () {
    let formSaver = applicationForm.innerHTML
    let createDiv = document.createElement('div');
    createDiv.className = 'confirm-form';
    formConfirmation.appendChild(createDiv);
    createDiv.appendChild(formSaver);
  });

  dateForm.addEventListener('input' , function () {
    let dateSaver = '';
    dateSaver = (dateForm.value);
    let dateDay = parseInt(dateSaver.slice(0, 2));
    let dateMonth = parseInt(dateSaver.slice(3, 5));
    let dateYear = parseInt(dateSaver.slice(6, 10));
    if (dateDay < 0 || dateDay > 31) {
      console.log(dateDay) 
      dateForm.value = '';             
      alert('Invalid Sintax');
    } else if (dateMonth < 0 || dateMonth > 12) {
      alert('Invalid Sintax');
      dateForm.value = '';
    } else if (dateYear < 0) {
      dateForm.value = '';
      alert('Invalid Sintax');
    }
  });

};