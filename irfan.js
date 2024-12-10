function selectSize(size) {
    document.getElementById('selected-size').textContent = `Selected Size: ${size}`;
    document.getElementById('total-price').style.opacity = 1;
    document.getElementById('total-price').textContent = `Total Price: $199.99`;
}

function checkout() {
    window.alert('Proceeding to checkout!');
}

function thankyou() {
    var fName=document.getElementById("name").value;
    window.alert("Thank You " +  fName);
}