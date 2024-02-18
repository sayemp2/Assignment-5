function hiddenSection(elementName){
    const element = document.getElementById(elementName);
    element.classList.add('hidden');
}

function visableSection(elementName){
    const element = document.getElementById(elementName);
    element.classList.remove('hidden');
}

function setValue(elementName,value){
    const element = document.getElementById(elementName);
    element.innerText = value;
}

function getInnerTxt(elementName){
    const element = document.getElementById(elementName);
    const elementValue = element.innerText;
}

function setElementValue(Element,value){
    const Elementvalue = document.getElementById(Element);
    Elementvalue.innerText = value.toFixed(0);
 }

 function removeChild(){
    const element = document.getElementById(elementName);
    
 }