const btnSignUp = document.querySelector('#sign-up');
const myElement = document.querySelector('#myElement');
const myValue=document.querySelector('#myValue');
myValue.innerHTML='Sign Up';

btnSignUp.addEventListener('click',()=>{
    setTimeout(()=>{
        btnSignUp.classList.add('button-transparent');
        myValue.innerHTML="Thanks !"
        btnSignUp.disabled=true;
           
    },800);
    let myP = document.createElement('p');
        myP.textContent='Please Wait !';
        myP.setAttribute('class','text-white text-center fs-4');
        myElement.appendChild(myP);
        clearAll(myP);
        
});
function clearAll(element){
   
    setTimeout(()=>{
        
        element.innerHTML='';
        btnSignUp.classList.remove('button-transparent');
        alert('Many Thanks, please close the window !');
        location.reload();
        
    },5000);
    
}
