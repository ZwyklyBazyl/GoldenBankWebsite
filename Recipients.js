const getDropdown = document.querySelectorAll('.dropdown');

const buttons = Array.from(getDropdown);

var activeButton = null;

for(var i=0; i<buttons.length;i++)
{
    buttons[i].addEventListener('click', buttonAddListener);
}

function buttonAddListener()
{
    if(activeButton != null)
    {  activeButton.parentNode.classList.remove('onDropdownRecipient');
     activeButton.addEventListener('click', buttonAddListener);
     activeButton.removeEventListener('click', buttonRemoveListener);
     activeButton.parentNode.childNodes[3].classList.remove('invisibleActive');
    }

    this.parentNode.classList.add('onDropdownRecipient'); 
    this.parentNode.childNodes[3].classList.add('invisibleActive');
    activeButton = this;
    this.addEventListener('click', buttonRemoveListener);
    this.removeEventListener('click', buttonAddListener);
}

function buttonRemoveListener()
{
    this.parentNode.classList.remove('onDropdownRecipient'); this.parentNode.childNodes[3].classList.remove('invisibleActive');
    activeButton = null;
    this.addEventListener('click', buttonAddListener);
    this.removeEventListener('click', buttonRemoveListener);
}
