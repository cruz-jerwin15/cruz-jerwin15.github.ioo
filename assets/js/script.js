import Product from './product.js';
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

const dressList = document.querySelector('#dress-list');

const productList = new Product();

const showWomen=()=>{
    
    productList.products.forEach(product=>{
        let outerDiv = document.createElement('DIV');
        outerDiv.setAttribute('class','col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4');
        
        let cardDiv = document.createElement('DIV');
        cardDiv.setAttribute('class','card card-promo');
    
        let productImg = document.createElement('IMG');
        productImg.setAttribute('class','card-img-top');
        productImg.src=`${product.image_1}`;
        console.log(product.img);
    
        let cardBody = document.createElement('DIV');
        cardBody.setAttribute('class','card-body');
    
        let cardParagraph = document.createElement('P');
        cardParagraph.setAttribute('class','card-text description mt-3');
        cardParagraph.innerText="This is paragraph";
    
        let cardDesc = document.createElement('P');
        cardDesc.setAttribute('class','description mt-2');
        cardDesc.innerText="Php. 120";
    
        cardBody.append(cardParagraph);
        cardBody.append(cardDesc);
    
    
        cardDiv.append(productImg);
        cardDiv.append(cardBody);
    
        outerDiv.append(cardDiv);
    
        dressList.append(outerDiv);
    });

   



}




showWomen();

