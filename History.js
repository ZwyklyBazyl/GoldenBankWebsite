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
    {  activeButton.parentNode.classList.remove('onDropdownTransaction');
     activeButton.addEventListener('click', buttonAddListener);
     activeButton.removeEventListener('click', buttonRemoveListener); 
    }

    this.parentNode.classList.add('onDropdownTransaction');
    activeButton = this;
    console.log(activeButton);
    this.addEventListener('click', buttonRemoveListener);
    this.removeEventListener('click', buttonAddListener);
}
function buttonRemoveListener()
{
    this.parentNode.classList.remove('onDropdownTransaction');
    activeButton = null;
    this.addEventListener('click', buttonAddListener);
    this.removeEventListener('click', buttonRemoveListener);
}
