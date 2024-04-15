// Declaring variables
const modal = document.getElementById('modal');
const modalOpener = document.getElementById('modalOpener');
const main = document.getElementById('main');

// Opening modal on button click and Enter keypress
modalOpener.addEventListener('click', () => {
  modal.style.display = 'flex';
  main.style.display = 'none';
});
modalOpener.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      modal.style.display = 'flex';
      main.style.display = 'none';
    }
})

// Closing modal on Escape clicked and click on x button
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modal.style.display = 'none';
    main.style.display = 'block';
  }
});
const closeModal = document.getElementById("closeModal");
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
  main.style.display = 'block';
});


function calculateBMI(event) {
  event.preventDefault();

  // Taking the values of InputFields
  const weight = document.getElementById('weight').value;
  const height = document.getElementById('height').value;

  // Validating the InputFields
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Please enter valid values for weight and height.");
    return;
  }

  // Calculating the BMI
  let bmi = parseFloat((weight / ((height / 100) * (height / 100))).toFixed(2));

  const bmiCategory = document.createElement('h3');
  switch (true) {
    case bmi < 18.5:
      bmiCategory.innerHTML = `Underweight`;
      break;
    case bmi >= 18.5 && bmi < 25:
      bmiCategory.innerHTML = `Normal weight`;
      break;
    case bmi >= 25 && bmi < 30:
      bmiCategory.innerHTML = `Overweight`;
      break;
    default:
      bmiCategory.innerHTML = `Obese`;
      break;
  }
  
  // Displaying the BMI 
  const displayBmi = document.getElementById('displayBmi');
  displayBmi.innerHTML = `<b> Your BMI is: ${bmi} </b>
  <h3 style='color:blue'> ${bmiCategory.innerHTML}  </h3>`;
}

document.getElementById('calculate').addEventListener('click', calculateBMI);

