const phoneButton = document.getElementById("phoneButton");
const addressButton = document.getElementById("addressButton");

const phone = document.getElementById("phone");
const address = document.getElementById("address");

phoneButton.addEventListener('click', EditPhone);
addressButton.addEventListener('click', EditAddress);

function EditPhone()
{
    phone.classList.add('invisible');
    var phoneInput = document.createElement('input');
    phoneInput.type = "number";
    phoneInput.className = "inputClass"; // set the CSS class
    phone.parentNode.appendChild(phoneInput);
}

function EditAddress()
{
    address.classList.add('invisible');
    var addressInput = document.createElement('input');
    addressInput.type = "text";
    addressInput.className = "inputClass"; // set the CSS class
    address.parentNode.appendChild(addressInput);
}