
import Product from './product.js';
const productList = new Product();
const cartTable = document.querySelector('#cartTable');
const clearBtn = document.querySelector('#clearBtn');
const clearBtnModal = document.querySelector('#clearBtnModal');
const checkOutModal = document.querySelector('#checkOutModal1');
const checkOutBtn = document.querySelector('#checkOutBtn');
let removeBtn = document.querySelector('.removeBtn');
let quantityInput;



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
            
            clearBtnModal.classList.add('disabled');
        }else{
            cartSm.innerText=productId.length;
            cartLg.innerText=productId.length;
            cartIcon.innerText=productId.length;
            // clearBtnModal.removeAttribute('disabled');
            clearBtnModal.classList.remove('disabled');
        }
       
       
    }else{

        cartSm.setAttribute('style','display:none');
        cartLg.setAttribute('style','display:none');
        cartIcon.setAttribute('style','display:none');
        clearBtnModal.classList.add('disabled');
        // clearBtnModal.setAttribute('disabled',true);
    }
}

const displayTotal=(total)=>{
    const totalCart = document.querySelector('#totalCart');
    totalCart.innerText=`PHP. ${total.toFixed(2)}`;
}
const getCartInfo=(total)=>{
    total = 0;
    if(localStorage.getItem('cart')!=null){
       
        let newId = JSON.parse(localStorage.getItem('cart'));
        let newQuantity =JSON.parse(localStorage.getItem('cartQuantity'));
        productId.splice(0,productId.length);
        productQuantity.splice(0,productQuantity.length);

        productId = newId.slice();
        productQuantity = newQuantity.slice();
        while (cartTable.firstChild) {
            cartTable.removeChild(cartTable.firstChild);
        }
        for(let i=0;i<productId.length;i++){
            let results = productList.products.filter(product => product.id == productId[i]);
           

            let tr = document.createElement('TR');

            let tdImage = document.createElement('TD');
            tdImage.setAttribute('style','width:40%');
            // tdImage.setAttribute('class','d-flex align-items-middle');
            let imageAnchor =document.createElement('A');
            imageAnchor.setAttribute('class','product-thumb');
            imageAnchor.setAttribute('href','#');
            let divImage= document.createElement('DIV');
            divImage.setAttribute('class','product-item');
            let prodImage =document.createElement('IMG');
            let divProdName =document.createElement('DIV');
            divProdName.setAttribute('class','product-info');
            let h4 = document.createElement('H4');
            h4.setAttribute('class','product-title fs-5 text-wrap');

            tdImage.append(divImage);
            divImage.append(imageAnchor);
            imageAnchor.append(prodImage);
            divImage.append(divProdName);
            prodImage.src=`${results[0].image_1}`;
            divProdName.append(h4);
            h4.innerText=`${results[0].product_name}`;


            let tdQuantity = document.createElement('TD');
            tdQuantity.setAttribute('class','text-center');
            let divQuantity= document.createElement('DIV');
            divQuantity.setAttribute('class','count-input');
            let inputQuantity =document.createElement('INPUT');
            inputQuantity.setAttribute('type','number');
            inputQuantity.setAttribute('id',`prod${productId[i]}`);
            inputQuantity.setAttribute('class','form-control quantityInput');
            inputQuantity.setAttribute('value',`${productQuantity[i]}`);

            tdQuantity.append(divQuantity);
            divQuantity.append(inputQuantity);

            let tdPrice = document.createElement('TD');
            tdPrice.setAttribute('class','text-center text-lg text-medium');
            tdPrice.innerText=`${results[0].price.toLocaleString("en-US")}`;

            let subtotal = results[0].price_int*productQuantity[i];
            total+=subtotal;

            let tdSubTotal = document.createElement('TD');
            tdSubTotal.setAttribute('class','text-center text-lg text-medium');
            tdSubTotal.setAttribute('id',`sub${productId[i]}`);
            tdSubTotal.innerText=`PHP. ${subtotal.toFixed(2)}`;


            let tdRemove = document.createElement('TD');
            tdRemove.setAttribute('class','text-center');
            let anchorRemove = document.createElement('A');
            anchorRemove.setAttribute('class','remove-from-cart removeBtn');
            anchorRemove.setAttribute('href','#');
            anchorRemove.setAttribute('data-toggle','tooltip');
            anchorRemove.setAttribute('title','');
            anchorRemove.setAttribute('id',`remove${productId[i]}`);
            anchorRemove.setAttribute('data-original-title','Remove item');
            let italic = document.createElement('i');
            italic.setAttribute('class','fa fa-times');

            tdRemove.append(anchorRemove);
            anchorRemove.append(italic);

            tr.append(tdImage);
            tr.append(tdQuantity);
            tr.append(tdPrice);
            tr.append(tdSubTotal);
            tr.append(tdRemove);

            
            cartTable.append(tr);

        }
        displayTotal(total);
        quantityInput = document.querySelectorAll('.quantityInput');
        quantityInput.forEach(quan => {
            quan.addEventListener('change',()=>{
                let newid = quan.id;
                let ids = newid.replace('prod','');
                let newQuan = quan.value;
                for(let i=0;i<productId.length;i++){
                    if(ids==productId[i]){
                        productQuantity[i]=newQuan;
                        let results = productList.products.filter(product => product.id == productId[i]);
                        let price = results[0].price_int;
                        let subt=newQuan*price;
                        const subDisplay = document.querySelector(`#sub${productId[i]}`);
                        subDisplay.innerText=`PHP. ${subt.toFixed(2)}`;
                    }
                }
                let total_price=0;
                for(let i=0;i<productId.length;i++){
                   
                    let results = productList.products.filter(product => product.id == productId[i]);
                    let price = results[0].price_int;
                    let subt=productQuantity[i]*price;
                    total_price+=subt;
                }
                displayTotal(total_price);
                // console.log(`${newid}`);
                localStorage.setItem('cartQuantity',JSON.stringify(productQuantity));
                quantityInput = document.querySelectorAll('.quantityInput');
            });
        });

        removeBtn = document.querySelectorAll('.removeBtn');

        removeBtn.forEach(rBtn=>{
            rBtn.addEventListener('click',()=>{
                let rem_id = rBtn.id.replace('remove','');
               
                let newId = JSON.parse(localStorage.getItem('cart'));
                let newQuantity =JSON.parse(localStorage.getItem('cartQuantity'));
                productId.splice(0,productId.length);
                productQuantity.splice(0,productQuantity.length);

                productId = newId.slice();
                productQuantity = newQuantity.slice();

                let singleQuantity;
                for(let i=0;i<productId.length;i++){
                    if(productId[i]==rem_id){
                        // singleId=rem_id;
                        singleQuantity=i;
                    }
                }

                let filteredId= productId.filter(element => element != rem_id);
                productQuantity.splice(singleQuantity, 1);

                localStorage.setItem('cart',JSON.stringify(filteredId));
                localStorage.setItem('cartQuantity',JSON.stringify(productQuantity));
                getCart();
                getCartInfo(0);
            });
        });
       
        
       
    }else{
        while (cartTable.firstChild) {
            cartTable.removeChild(cartTable.firstChild);
        }
    }
}


clearBtn.addEventListener('click',()=>{
    localStorage.removeItem('cart');
    localStorage.removeItem('cartQuantity');
    getCart();
    getCartInfo(total);
    total="";
    displayTotal(total);
    alert("All product in your cart is successfully removed.");
});
checkOutBtn.addEventListener('click',()=>{
    localStorage.removeItem('cart');
    localStorage.removeItem('cartQuantity');
    getCart();
    getCartInfo(total);
    total="";
    displayTotal(total);
    alert("Thank you for purchasing to our store.");
});

getCart();
let total=0;
getCartInfo(total);





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
        // checkOutModal.classList.add('disabled');
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
        // checkOutModal.classList.add('disabled');
        
    }
});


loginLg.addEventListener('click',()=>{
    if(loginLg.innerText=="Logout"){
        localStorage.setItem('login',"false");
        loginLg.innerText='Login';
        loginLg.setAttribute('href',"login.html");
        loginXs.setAttribute('href',"login.html");
        loginXs.innerText='Login';
        // checkOutModal.classList.add('disabled');
    }
});

  if (localStorage.hasOwnProperty("login")) {
    if(localStorage.getItem("login")=="true"){
        loginLg.innerText=`Logout`;
        loginLg.setAttribute('href',"#");
        loginIconify.setAttribute('icon','material-symbols:lock-open');
        loginXs.setAttribute('href',"#");
        loginXs.innerText='Logout';
        // checkOutModal.classList.add('disabled');
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
        // checkOutModal.classList.add('disabled');
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