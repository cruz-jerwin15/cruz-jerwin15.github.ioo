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

const products =[
    {'id':0,'category':'women','product_name':'Culotte dress','desc':'This is a Cullote dress','img':'dress1.png','price':'$120'},
    {'id':1,'category':'women','product_name':'Babydoll dress','desc':'This is a Babydoll dress','img':'dress2.jpg','price':'$150'},
    {'id':2,'category':'women','product_name':'Wrap around dress','desc':'This is a Wrap around dress','img':'dress3.jpg','price':'$150'},
    {'id':3,'category':'women','product_name':'Kimono dress','desc':'This is a Kimono dress','img':'dress4.jpg','price':'$150'},
    {'id':4,'category':'women','product_name':'Bubble dress','desc':'This is Bubble dress','img':'dress5.jpg','price':'$150'},
    {'id':5,'category':'women','product_name':'Tutu dress','desc':'This is a Tutu dress','img':'dress6.jpg','price':'$150'},
    {'id':6,'category':'women','product_name':'Polo dress','desc':'This is a Polo dress','img':'dress7.jpg','price':'$150'},
    {'id':7,'category':'women','product_name':'Shirtdress','desc':'This is a Shirtdress','img':'dress9.jpg','price':'$150'},
    {'id':8,'category':'women','product_name':'Sundress','desc':'This is a Sundress','img':'dress8.jpg','price':'$150'}
];

