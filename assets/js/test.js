
const wordId = document.querySelector('#wordId');
const wordQuantity = document.querySelector('#wordQuantity');
const addBtn = document.querySelector('#addBtn');
const removeBtn = document.querySelector('#removeBtn');
const removeid = document.querySelector('#removeid');

const record ={};
const recordArray=[];
let productId=[];
let productQuantity=[];
addBtn.addEventListener('click',()=>{
    let id = wordId.value;
    let quantity = wordQuantity.value;
    if(localStorage.getItem('cart')!=null){
        console.log("LocalStorage Exist");
        let newId = JSON.parse(localStorage.getItem('cart'));
        let newQuantity =JSON.parse(localStorage.getItem('cartQuantity'));
        productId.splice(0,productId.length);
        productQuantity.splice(0,productQuantity.length);

        productId = newId.slice();
        productQuantity = newQuantity.slice();

        for(let i=0;i<productId.length;i++){
            if(productId[i]==id){
                productQuantity[i]=quantity;
                localStorage.setItem('cart',JSON.stringify(productId));
                localStorage.setItem('cartQuantity',JSON.stringify(productQuantity));
                console.log(productId);
                console.log(productQuantity);
               
                return true;
            }
        }

        productId.push(id);
        productQuantity.push(quantity);
        localStorage.setItem('cart',JSON.stringify(productId));
        localStorage.setItem('cartQuantity',JSON.stringify(productQuantity));
        console.log(productId);
        console.log(productQuantity);


    }else{
        productId.push(id);
        productQuantity.push(quantity);
        localStorage.setItem('cart',JSON.stringify(productId));
        localStorage.setItem('cartQuantity',JSON.stringify(productQuantity));
        console.log("LocalStorage Not Exist");
        // localStorage.setItem('cart',"TEST");
    }

    let cartIds = JSON.parse(localStorage.getItem('cart'));
    let cartQuantities = JSON.parse(localStorage.getItem('cartQuantity'));

    console.log(cartIds);
    console.log(cartQuantities);
    
});

removeBtn.addEventListener('click',()=>{
    // localStorage.removeItem('cart');
    // localStorage.removeItem('cartQuantity');

    // return true;

    let rem_id =removeid.value;

    let newId = JSON.parse(localStorage.getItem('cart'));
    let newQuantity =JSON.parse(localStorage.getItem('cartQuantity'));
    productId.splice(0,productId.length);
    productQuantity.splice(0,productQuantity.length);

    productId = newId.slice();
    productQuantity = newQuantity.slice();

    let singleQuantity;
    for(let i=0;i<productId.length;i++){
        if(productId[i]==rem_id){
            singleId=rem_id;
            singleQuantity=i;
        }
    }

    let filteredId= productId.filter(element => element != rem_id);
    productQuantity.splice(singleQuantity, 1);

    localStorage.setItem('cart',JSON.stringify(filteredId));
    localStorage.setItem('cartQuantity',JSON.stringify(productQuantity));

    console.log(filteredId);
    console.log(productQuantity);

});