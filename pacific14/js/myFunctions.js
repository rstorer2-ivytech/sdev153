function insertModDate(myId) {
    const lm = document.getElementById(myId);
    lm.innerText = lm.innerText + document.lastModified;
}

function changeColor(myClass, myColor) {
    const elements = document.getElementsByClassName(myClass);
    for(i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = myColor;
    }
}

function checkPhone(myId, msgId) {
    const element = document.getElementById(myId);
    const element2 = document.getElementById(msgId);
    const val = element.value;
    //555-123-4567
    var simpleRe = new RegExp('^[0-9]{3}-[0-9]{3}-[0-9]{4}$');
    const retVal = simpleRe.test(val);

    if (retVal) {
        element2.innerText = "";
        element2.style.display = 'None';
    }
    else {
        element2.style.display = 'block';
        element2.style.backgroundColor = 'red';
        element2.style.color = 'white';
        element2.innerText = "Please enter a phone number in the format of: 123-456-7890";
    }

    return retVal;
}