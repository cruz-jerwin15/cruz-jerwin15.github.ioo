const loginBtn = document.querySelector('#loginBtn');
const loginEmail = document.querySelector('#loginEmail');
const loginPassword = document.querySelector('#loginPassword');
const emailError = document.querySelector('.new-form span:nth-of-type(1)');
const passwordError = document.querySelector('.new-form span:nth-of-type(2)');
console.log(emailError);
loginBtn.addEventListener('click',()=>{
    let email = loginEmail.value;
    let password = loginPassword.value;
    if(email.trim().length<=0){
        emailError.innerHTML='Do not leave email blank';
    }else{
        emailError.innerHTML='';
    }

    if(password.trim().length<=0){
        passwordError.innerHTML='Do not leave password blank';
    }else{
        passwordError.innerHTML='';
    }
  

    if((localStorage.getItem('email')==email)&&(localStorage.getItem('password')==password)){
        localStorage.setItem('login',"true");
        window.open('../index.html','_self');
    }else{
        passwordError.innerHTML='Wrong email/password';
    }
});