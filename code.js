// hola :)
function CalculateDiscount() {
    // get inputs values
    let originalPrice = document.getElementById("price-input").value;
    let discountPercentage = document.getElementById("discount-input").value / 100;

    //check errors
    if(originalPrice == NaN || originalPrice == 0){
        alert("ingrese una estrada valida");
        return;
    }

    //calculate
    let moneySaved = originalPrice * discountPercentage;
    let total = originalPrice - moneySaved;

    //show resutls
    //gets the p elements in the html
    let totalOutputText = document.getElementById("result-total");
    let savedOutputText = document.getElementById("result-saved");
    //modify to show the results
    totalOutputText.innerText = total;
    //darle un formato al texto
    savedOutputText.innerText = moneySaved;


}
