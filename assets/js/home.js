
import Product from './product.js';
const productList = new Product();
const promoList = document.querySelector('#promoList');
const spin = document.querySelector('#spin');
const homeLabel = document.querySelector('#homeLabel');
const searchLg = document.querySelector('#searchLg');
const searchXl = document.querySelector('#searchXl');
let productChoose;


// Cart

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
        console.log("TEST this");
        cartSm.setAttribute('style','display:inline-block');
        cartLg.setAttribute('style','display:inline-block');
        cartIcon.setAttribute('style','display:inline-block');
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

if(localStorage.getItem('singleProduct')!=null){
    localStorage.setItem('singleProduct','ALL');
}else{
    localStorage.setItem('singleProduct','ALL');
}


// Login
const searchModalText = document.querySelector('#searchModalText');
const searchModalBtn = document.querySelector('#searchModalBtn');
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

 

searchModalBtn.addEventListener('click',()=>{
    let search = searchModalText.value;
    searchProduct(search);
});
searchLg.addEventListener('change',()=>{ 
    let search = searchLg.value;
    searchProduct(search);
});
searchXl.addEventListener('change',()=>{ 
    let search = searchXl.value;
    searchProduct(search);
});


const searchProduct=(search)=>{
   
    if(search.trim().length>0){
        homeLabel.innerText = "Search Product";
        const results = productList.products.filter(product => product.product_name.toLowerCase().includes(search.toLowerCase())==true);
        while (promoList.firstChild) {
            promoList.removeChild(promoList.firstChild);
        }
        if(results.length>0){
            showProduct(results);
        }else{
            homeLabel.innerHTML = '<span class="text-danger">Search no result</span>';
        }
        
    }else{
        homeLabel.innerHTML = '<span class="text-danger">Do not leave search input blank</span>';
    }
    
    
}

const showPromo=()=>{

    spin.style="display:none";
    homeLabel.innerText = "New Promo"
    const results = productList.products.filter(product => product.promo == "YES");
    showProduct(results);
   
}

const showProduct=(results)=>{
    results.forEach(result=>{
        
        let outerDiv = document.createElement('DIV');
        outerDiv.setAttribute('style','cursor:pointer');
        outerDiv.setAttribute('id',result.id);
        outerDiv.setAttribute('class','productChoose col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4');
            
        let cardDiv = document.createElement('DIV');
        cardDiv.setAttribute('class','card card-promo');
        
        let productImg = document.createElement('IMG');
        productImg.setAttribute('class','card-img-top');
        productImg.src=`${result.image_1}`;

        
        let cardBody = document.createElement('DIV');
        cardBody.setAttribute('class','card-body');
        
        let cardParagraph = document.createElement('P');
        cardParagraph.setAttribute('class','card-text description mt-3');
        cardParagraph.innerText=`${result.product_name}`;
        
        let cardDesc = document.createElement('P');
        cardDesc.setAttribute('class','description mt-2');
        cardDesc.innerText=`${result.price}`;
    
        cardBody.append(cardParagraph);
        cardBody.append(cardDesc);
        
        
        cardDiv.append(productImg);
        cardDiv.append(cardBody);
        
        outerDiv.append(cardDiv);
        
        promoList.append(outerDiv);
    });

    productChoose = document.querySelectorAll('.productChoose');
    productChoose.forEach(prod=>{
        prod.addEventListener('click',()=>{

            localStorage.setItem('singleProduct',prod.id);
            window.open('single.html','_self');
        })
    });

}


showPromo();





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

const isLogin=()=>{
    if(localStorage.getItem('login')=="true"){
        
        getCart();
    }else{
        cartSm.setAttribute('style','display:none');
        cartLg.setAttribute('style','display:none');
        cartIcon.setAttribute('style','display:none');
    }
}

isLogin();