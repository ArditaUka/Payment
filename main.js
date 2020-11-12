/************************* validations and dynamic elements ********************/
// create dynamic li for years
window.onload = () => {
  const years = generateYears();
  const list = document.querySelector('.years');
  for (let i = 0; i < years.length; i++) {
    let listElement = document.createElement('li');
    listElement.innerHTML = years[i];
    listElement.className = 'year';
    listElement.setAttribute('onClick', `yearRemoveClass(${years[i]})`)
    list.appendChild(listElement);
  }
};
// close dropdown when clicking outside 
document.onclick = (e) => {
  const yearWrapper = document.querySelector(".year-validation")
  const monthWrapper = document.querySelector(".month-validation")
  const isClickedInsideMonth = monthWrapper.contains(e.target);
  const isClickedInsideYear = yearWrapper.contains(e.target);
  if(!isClickedInsideMonth) {
    monthWrapper.classList.remove("active")
  }
  if(!isClickedInsideYear) {
    yearWrapper.classList.remove("active")
  }
}

// put spaces between card numbers
function spaceCardInput() {
  const cardInput = document.getElementById('card-number');
  let regex = cardInput.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1  ').trim();
  cardInput.value = regex;
  if(cardInput.value.length >= 4) {
    const trimCardValue = cardInput.value.replace(/\s/g, '')
    checkCardType(trimCardValue);
  } else {
    document.getElementById('card-number').style.backgroundImage = '';
  }
}

// check credit card type
function checkCardType(number) {
  const visa = new RegExp("^4");
  const mastercard = new RegExp("^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[01]|2720)[0-9]{0,}$");
  const creditCardInput = document.getElementById('card-number');
  //visa
  if (number.match(visa) != null)
  creditCardInput.style.backgroundImage = "url(images/visa-logo.png)";

  // Mastercard 
   if (number.match(mastercard))
      creditCardInput.style.backgroundImage = "url(images/mastercard-logo.png)";
}

function generateYears() {
  const currentYear = new Date().getFullYear();
  const yearsRange = [];
  for(i = currentYear - 5; i <= currentYear + 10; i++)
  {
    yearsRange.push(i);
  }
  return yearsRange;
}


/************************** style ****************************/

const monthPlaceholder = document.querySelector(".month-placeholder-item").textContent;
const monthPlaceholderTag = document.querySelector(".month-placeholder-item");
const monthBool = monthPlaceholder.includes("Monat auswählen");

const yearPlaceholder = document.querySelector(".year-placeholder-item").textContent;
const yearPlaceholderTag = document.querySelector(".year-placeholder-item");
const yearBool = yearPlaceholder.includes("Jahr auswählen");

if (monthBool) {
  monthPlaceholderTag.style.color="rgba(0,51,102,0.5)"
}

if (yearBool) {
  yearPlaceholderTag.style.color="rgba(0,51,102,0.5)"
}

function monthToggleClass() {
  const clicked = document.querySelector(".month-validation");
  clicked.classList.toggle("active");
  
}

function monthRemoveClass(month) {
  document.querySelector(".month-placeholder-item").innerHTML = month;
  const placeholderTag = document.querySelector(".month-placeholder-item")
  placeholderTag.style.color="rgba(0,51,102,1)";
  const clicked = document.querySelector(".month-validation");
  clicked.classList.remove("active");
  return true
}

function yearToggleClass() {
  const clickedYear = document.querySelector(".year-validation");
  clickedYear.classList.toggle("active")
}

function yearRemoveClass(year) {
  document.querySelector(".year-placeholder-item").innerHTML = year;
  const placeholderTag = document.querySelector(".year-placeholder-item")
  placeholderTag.style.color="rgba(0,51,102,1)";
  const clicked = document.querySelector(".year-validation");
  clicked.classList.remove("active");
  return true
}



