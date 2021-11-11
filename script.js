var input = function (id) {
    return document.getElementById(id); 
};

var result = function () {
    var subtotal = parseFloat( input("subtotal").value );
    var taxRate  = parseFloat( input("taxRate").value );

    input("salesTax").value = "";
    input("total").value = "";
    
    var salesTax = subtotal * (taxRate / 100);
    salesTax = parseFloat( salesTax.toFixed(2) );
    var total = subtotal + salesTax;
    input("salesTax").value = salesTax;
    input("total").value = total.toFixed(2);
}

window.onload = function () {
    input("calculate").onclick = result;
    input("subtotal").focus();
};