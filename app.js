// https://calculator.swiftutors.com/natural-log-calculator.html

const v1 =  document.getElementById('v1');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const naturalLogRadio = document.getElementById('naturalLogRadio');
const lnRadio = document.getElementById('lnRadio');

let naturalLog;
let ln = v1; 

// labels of the inpust
const variable1 = document.getElementById('variable1');

naturalLogRadio.addEventListener('click', function() {
  variable1.textContent = 'ln';
  ln = v1;
  result.textContent = '';
});

lnRadio.addEventListener('click', function() {
  variable1.textContent = 'Natural Log';
  naturalLog = v1;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(naturalLogRadio.checked)
    result.textContent = `Natural Log = ${computeNaturalLog().toFixed(5)}`;

  else if(lnRadio.checked)
    result.textContent = `ln = ${computeln().toFixed(5)}`;
})

// calculation

function computeNaturalLog() {
  return Math.log(Number(ln.value));
}

function computeln() {
  return 1 / Number(specificVolume.value);
}