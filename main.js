const form=document.querySelector("#contact-form")
const nameInput=document.querySelector("#name");
const emailInput=document.querySelector("#email");
const messageInput=document.querySelector("#message");
const meg=document.querySelector('.meg')


form.addEventListener('submit', submit);


function submit(e){
    e.preventDefault()

if(nameInput.value==='' || emailInput.value ==='' ){
meg.style.color='red'
 meg.innerHTML='Please Enter your infro';
 setTimeout(() =>meg.remove(), 3000);
}
else


{
        nameInput.value='';
        emailInput.value='';
        messageInput.value='';
    }
}