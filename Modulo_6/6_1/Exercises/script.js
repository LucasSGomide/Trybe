// Form scripts
window.onload = function () {
  
  const stateForm = document.querySelector('#state-form');

  const  brazilianStates = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

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

const dateForm = document.querySelector('#starting-date-form');
const submitForm = document.querySelector('#submit-form-button');
const applicationForm = document.querySelector('.application-form');
const formConfirmation = document.querySelector('.form-confirmation');

submitForm.addEventListener('click', function (event) {event.preventDefault()

const fullName = document.querySelector('#full-name').value;
const emailForm = document.querySelector('#email-form').value;
const cpfForm = document.querySelector('#cpf-form').value;
const adressForm = document.querySelector('#adress-form').value;
const stateValue = document.querySelector('#state-form').value;
const resumeSummary = document.querySelector('#resume-summary').value;
const postionHeld = document.querySelector('#position-held').value;
const positionDescription = document.querySelector('#position-description').value;
const startingDate = dateForm.value;

const apartmentForm  = document.querySelector('#apartment-form');
const houseForm = document.querySelector('#house-form');

let formContent = [fullName, emailForm, cpfForm, adressForm, stateValue, resumeSummary, postionHeld, positionDescription, startingDate];

if (apartmentForm.checked) {
  let apartmentTrue = 'Apartment'
  formContent.splice(3, 0, apartmentTrue);
} else {
  let houseTrue = 'House'
  formContent.splice(3, 0, houseTrue);
}
  const confirmationDiv = document.querySelector('#confirmation');
  for (item = 0; item < formContent.length; item += 1) {
    console.log(formContent[item])
    let newP = document.createElement('p');
    newP.innerText = formContent[item];
    confirmationDiv.appendChild(newP);
  }
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

