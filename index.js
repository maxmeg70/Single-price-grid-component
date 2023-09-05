const btnSignUp = document.querySelector('#sign-up');

btnSignUp.addEventListener('click', ()=>{
    setTimeout(()=>{
        btnSignUp.classList.add('button-sign');
        btnSignUp.disabled=true;
        btnSignUp.style.display='none';
        alert('If you click ok the button will disappear, Thanks for play');
        clearAll();
        
        
    },1000);
    function clearAll(){
        setTimeout(()=>{
            confirm('Do you want to play again ?');
            location.reload();
        },2500);
    }
    
}) 
