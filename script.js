


function ageCalculator() {
    var ageInput = document.getElementById('ageInput').value;
    var resultCard_1 = document.getElementById('resultCard-1'); //child
    var resultCard_2 = document.getElementById('resultCard-2'); //adult
    var resultTitle = document.getElementById('resultTitle');

    if (ageInput<1) {
        alert("invalid input")
    }
    else if (ageInput >0 && ageInput <18) {
        resultCard_2.classList.add('d-none');
        resultTitle.innerHTML = "block";
        resultCard_1.classList.remove('d-none');
    }
    else {
        resultCard_1.classList.add('d-none');
        resultTitle.innerHTML = "block";
        resultCard_2.classList.remove('d-none');
    }
}