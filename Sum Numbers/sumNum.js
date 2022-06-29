function calculate() {

    let first = document.getElementById('firstInput');
    let second = document.getElementById('secondInput');

    let result = Number(first.value) + Number(second.value);
    
    let calc = document.getElementById('resultInput');
    calc.value = result;

}