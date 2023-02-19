const $form = document.querySelector("form");

$form.addEventListener("submit", (e) =>{
    e.preventDefault();

    if(validaEmail && validaSenha){
        validaEmail();
        validaSenha();
    }
    
});


function validaEmail(){
    const $inputEmail = document.querySelector(".form-input-email").value;

    if($inputEmail.length < 10){
        return alert("Email incorreto, verifique e tente novamente");
    }

}


function validaSenha(){
    const $inputSenha = document.querySelector(".form-input-senha").value;
    
    if($inputSenha.length <= 7){
        return alert("Senha incorreta, verifique e tente novamente");
    } else {
        window.location.href = "/assets/pages/pets.html";
    }

    
}
