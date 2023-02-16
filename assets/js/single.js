
import Product from './product.js';
const productList = new Product();
const singleTitle = document.querySelector('#singleTitle');
const singlePrice = document.querySelector('#singlePrice');
const singleImage = document.querySelector('#singleImage');
const image_1 = document.querySelector('#image_1');
const image_2 = document.querySelector('#image_2');
const image_3 = document.querySelector('#image_3');
const image_4 = document.querySelector('#image_4');
const prodName = document.querySelector('#prodName');
const homeLabel = document.querySelector('#homeLabel');
const descriptions = document.querySelector('#descriptions');
const cartBtn = document.querySelector('#cartBtn');




// Cart

const cartSm = document.querySelector('#cart-sm');
const cartLg= document.querySelector('#cart-lg');
const cartIcon= document.querySelector('#cart-icon');

const record ={};
const recordArray=[];
let productId=[];
let productQuantity=[];

cartBtn.addEventListener('click',()=>{
    if(localStorage.getItem('login')=="true"){
        addToCart();
    }else{
        alert("You need to login in first!");
    }
});

const getCart=()=>{
    if(localStorage.getItem('cart')!=null){
        cartSm.setAttribute('style','display:inline-block');
        let newId = JSON.parse(localStorage.getItem('cart'));
        let newQuantity =JSON.parse(localStorage.getItem('cartQuantity'));
        productId.splice(0,productId.length);
        productQuantity.splice(0,productQuantity.length);

        productId = newId.slice();
        productQuantity = newQuantity.slice();

        if(productId.length<=0){
            cartSm.setAttribute('style','display:none');
            cartLg.setAttribute('style','display:none');
            cartIcon.setAttribute('style','display:none');
        }else{
            cartSm.innerText=productId.length;
            cartLg.innerText=productId.length;
            cartIcon.innerText=productId.length;
        }
       
    }else{
        cartSm.setAttribute('style','display:none');
        cartLg.setAttribute('style','display:none');
        cartIcon.setAttribute('style','display:none');
    }
}

const addToCart=()=>{
    let id = localStorage.getItem('singleProduct');
    let quantity =1;
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

    getCart();
    console.log(cartIds);
    console.log(cartQuantities);


}

const getProduct=()=>{
    let id = localStorage.getItem('singleProduct');
    const results = productList.products.filter(product => product.id == id);
    showProduct(results);
}
const showProduct=(results)=>{
    singleTitle.innerText = results[0].product_name;
    singlePrice.innerText = results[0].price;
    singleImage.src=results[0].image_1;
    image_1.src=results[0].image_1;
    image_2.src=results[0].image_2;
    image_3.src=results[0].image_3;
    image_4.src=results[0].image_4;
    prodName.innerText=results[0].product_name;
    homeLabel.innerText=`${results[0].category} / ${results[0].type}`;
    descriptions.innerText=`${results[0].descriptions}`;
}

getProduct();
getCart();




// Login

const loginLg = document.querySelector('#loginLg');

const loginXs =document.querySelector('#loginXs');
const loginIcon =document.querySelector('#loginIcon');
const loginIconify =document.querySelector('#loginIcon iconify-icon');

// console.log(loginIconify);

loginXs.addEventListener('click',()=>{
   
    if(loginXs.innerText=="Logout"){
        localStorage.setItem('login',"false");
        loginLg.innerText='Login';
        loginLg.setAttribute('href',"login.html");
        loginIcon.setAttribute('href',"login.html");
        loginIconify.setAttribute('icon','material-symbols:lock');
        loginXs.setAttribute('href',"login.html");
        loginXs.innerText='Login';
    }
});
loginIcon.addEventListener('click',()=>{
    if(loginIcon.href=="#"){
        localStorage.setItem('login',"false");
        loginLg.innerText='Login';
        loginLg.setAttribute('href',"login.html");
        loginIcon.setAttribute('href',"login.html");
        loginIconify.setAttribute('icon','material-symbols:lock');
        loginXs.setAttribute('href',"login.html");
        loginXs.innerText='Login';
    }
});


loginLg.addEventListener('click',()=>{
    if(loginLg.innerText=="Logout"){
        localStorage.setItem('login',"false");
        loginLg.innerText='Login';
        loginLg.setAttribute('href',"login.html");
        loginXs.setAttribute('href',"login.html");
        loginXs.innerText='Login';
    }
});

  if (localStorage.hasOwnProperty("login")) {
    if(localStorage.getItem("login")=="true"){
        loginLg.innerText=`Logout`;
        loginLg.setAttribute('href',"#");
        loginIconify.setAttribute('icon','material-symbols:lock-open');
        loginXs.setAttribute('href',"#");
        loginXs.innerText='Logout';
    }else{
        localStorage.setItem("email","cruz@gmail.com");
        localStorage.setItem("password","admin123");
        localStorage.setItem("firstname","Jerwin");
        localStorage.setItem("lastname","Cruz");
        loginLg.innerText='Login';
        loginLg.setAttribute('href',"login.html");
        loginIcon.setAttribute('href',"login.html");
        loginIconify.setAttribute('icon','material-symbols:lock');
        loginXs.setAttribute('href',"login.html");
        loginXs.innerText='Login';
    }

  } else {
    if(localStorage.getItem("login")=="false"){
        loginLg.innerText=`Logout`;
        loginLg.setAttribute('href',"#");
        loginIconify.setAttribute('icon','material-symbols:lock-open');
        loginXs.setAttribute('href',"#");
        loginXs.innerText='Logout';
    }else{
        localStorage.setItem("email","cruz@gmail.com");
        localStorage.setItem("password","admin123");
        localStorage.setItem("firstname","Jerwin");
        localStorage.setItem("lastname","Cruz");
        loginLg.innerText='Login';
        loginLg.setAttribute('href',"login.html");
        loginIcon.setAttribute('href',"login.html");
        loginIconify.setAttribute('icon','material-symbols:lock');
        loginXs.setAttribute('href',"login.html");
        loginXs.innerText='Login';
    }
    

  }

 




const subBtn = document.querySelector('#sub-btn');
const subemail =document.querySelector('#subscribeHome');
const emailError = document.querySelector('.subs span');

let TestObj={};
let TestArray=[];
subBtn.addEventListener('click',()=>{
    let email = subemail.value;
    if(email.trim().length<=0){
        emailError.innerText="Do not leave email blank!";
    }else{
        emailError.innerText="Thank you for subscribing!";
        TestObj.email=email;
        TestObj.name="A";
        TestArray.push(TestObj);
        
    }

    console.log(TestArray);
    
});