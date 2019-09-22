  
function doCalc(){
    const subTotal = parseFloat(document.querySelector('#total').value)
    const taxRate = parseFloat(document.querySelector('#rate').value)
    const tax = subTotal * .055
    const tip = subTotal * (taxRate / 100)
    const outNum = subTotal + tax + tip
    document.querySelector('#tip').innerHTML =  "$" + tip.toFixed(2)
    document.querySelector('#tax').innerHTML =  "$" + tax.toFixed(2)
    document.querySelector('#fullTotal').innerHTML =  "$" + outNum.toFixed(2)
}

document.querySelector('#calcButton').addEventListener('click', doCalc)