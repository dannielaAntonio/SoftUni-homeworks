function calculate() {

    let first = document.getElementById('firstInput').value;
    let second = document.getElementById('secondInput').value;
    let result = Number(first) + Number(second);

    
    if (Number.isNaN(result)) {
        alert('Please enter numbers!')
    } else {
       document.getElementById('resultInput').value = result;
   }

}