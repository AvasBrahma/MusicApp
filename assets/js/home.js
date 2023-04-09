const loginSec=document.querySelector('.login-section'); 
const loginlink=document.querySelector('.login-link');
const signuplink=document.querySelector('.sign-up-link');

signuplink.addEventListener('click', ()=>{
    console.log("Click Sign Up")
    loginSec.classList.add('active');
});


loginlink.addEventListener('click', ()=>{
  console.log("Click LogIn");
  loginSec.classList.remove('active');
})
