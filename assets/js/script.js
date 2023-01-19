const fromInput = document.querySelector('#from-input');
const toInput = document.querySelector('#to-input');
const fromValue = document.querySelector('#from-value');
const toValue = document.querySelector('#to-value');


fromInput.addEventListener('input',()=>{
    
    if(parseInt(fromInput.value)>parseInt(toInput.value)){
        toInput.value=parseInt(fromInput.value)+1;
        toValue.innerText = toInput.value;
    }
    fromValue.innerText = fromInput.value;
});

toInput.addEventListener('input',()=>{
    if(parseInt(toInput.value)<parseInt(fromInput.value)){
        fromInput.value=parseInt(toInput.value)-1;
        fromValue.innerText = fromInput.value;
    }
    toValue.innerText = toInput.value;
});