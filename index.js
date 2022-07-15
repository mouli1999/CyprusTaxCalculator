/*
    Tax Owed Calculator
    - €0 to €20000 is taxed at 0%
    - €20001 to €35000 is taxed at 20%
    - €35,001 to €100,000 is taxed at 40%
*/



const input = document.querySelector('input');
//Boolean(sel) = document.querySelector('select');

input.addEventListener('input', calculateSalaries);

function calculateSalaries(e) {
  let value = e.target.value;

  let annualTax = getTax(value);
  let insurance= getInsurance(value);
  let net = getNet(value,annualTax,insurance);
 
  document.getElementById('gross').innerHTML=Number (value).toFixed(2);
  document.getElementById('monthlygross').innerHTML=Number(value/12).toFixed(2);
  
  document.getElementById('annualTax').innerHTML=Number(annualTax).toFixed(2);
  document.getElementById('monthlyTax').innerHTML=Number(annualTax/12).toFixed(2);
  
  document.getElementById("annualInsurance").innerHTML= Number(insurance).toFixed(2);
  document.getElementById("monthlyInsurance").innerHTML=Number(insurance/12).toFixed(2);
  
  document.getElementById("annualNet").innerHTML= Number(net).toFixed(2);
  document.getElementById("monthlyNet").innerHTML= Number(net/12).toFixed(2);

}
function getTax(gross) {
  let taxvalue= 0.00;
  if(gross <= 19500) {
    taxvalue = 0.00;
  } 
  else if(gross > 19500 && gross <= 28000) {
    taxvalue = (gross*20)/100;
  }
  else if(gross > 28000 && gross <= 36300) {
    taxvalue = (gross*25)/100;
  }
  else if(gross > 36300 && gross <= 60000) {
    taxvalue = (gross*30)/100;
  }
  else{
    taxvalue = (gross*35)/100;
  }
return taxvalue;
}
function getInsurance(gross) {
  return (gross*8.3)/100;
}
function getNet(gross,tax,socialInsurance) {
  return gross-(tax+socialInsurance);  
}