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

const dateForm = document.querySelector('#datepicker');
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
let livingType;

let formContent = {Name : fullName, Email : emailForm, CPF : cpfForm, Address : adressForm, State : stateValue, Summary : resumeSummary, Position : postionHeld, Description : positionDescription, Date : startingDate};

if (apartmentForm.checked) {
  livingType = 'Apartment';
  //formContent.splice(3, 0, apartmentTrue);
} else {
  livingType = 'House';
  //formContent.splice(3, 0, houseTrue);
}
  const confirmationDiv = document.querySelector('#confirmation');
  for (item in formContent) {
    console.log(formContent[item])
    let newP = document.createElement('p');
    newP.innerText = item + ' : ' + formContent[item];
    newP.className = 'confirmationP'
    confirmationDiv.appendChild(newP);
  }

  let livingP = document.createElement('p');
  livingP.innerText = 'Type: ' + livingType;
  livingP.className = 'confirmationP';
  confirmationDiv.appendChild(livingP);
});

/*dateForm.addEventListener('input' , function () {
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

<div class="field">
        
    <div class="control">

    </div>
</div>*/
