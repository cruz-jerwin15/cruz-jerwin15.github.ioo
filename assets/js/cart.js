
import Product from './product.js';
const productList = new Product();
const cartTable = document.querySelector('#cartTable');




// Cart

const cartSm = document.querySelector('#cart-sm');
const cartLg= document.querySelector('#cart-lg');
const cartIcon= document.querySelector('#cart-icon');

const record ={};
const recordArray=[];
let productId=[];
let productQuantity=[];



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

const getCartInfo=()=>{
    if(localStorage.getItem('cart')!=null){
       
        let newId = JSON.parse(localStorage.getItem('cart'));
        let newQuantity =JSON.parse(localStorage.getItem('cartQuantity'));
        productId.splice(0,productId.length);
        productQuantity.splice(0,productQuantity.length);

        productId = newId.slice();
        productQuantity = newQuantity.slice();

        for(let i=0;i<productId.length;i++){
            let results = productList.products.filter(product => product.id == productId[i]);
            
        }
       
    }else{
       
    }
}


getCart();
getCartInfo();




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