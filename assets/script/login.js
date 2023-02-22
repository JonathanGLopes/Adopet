const $form = document.querySelector("form");

$form.addEventListener("submit", (e) =>{
    e.preventDefault();

    validaCampos();

});


function validaCampos(){
    const $inputEmail = document.querySelector(".form-input-email").value;
    const $inputSenha = document.querySelector(".form-input-senha").value;
    const $textoModalErro = document.querySelector(".modal-content-input");

    if($inputEmail === '' && $inputSenha === ''){
        $textoModalErro.textContent = "Preencha os campos.";
        document.querySelector(".form-input-email").focus();
        showModal();
    } else {
        validaEmail();
        validaSenha();
    }
}


function validaEmail(){
    const $inputEmail = document.querySelector(".form-input-email").value;
    const $textoModalEmail = document.querySelector(".modal-content-input");

    if($inputEmail === ''){
        $textoModalEmail.textContent = "Por favor, informe o email";
        showModal();
    }

}


function validaSenha(){
    const $inputSenha = document.querySelector(".form-input-senha").value;
    const $textoModalSenha = document.querySelector(".modal-content-input");

    if($inputSenha === ''){
        $textoModalSenha.textContent = "Por favor, informe a senha";
        showModal();
    }
    else if($inputSenha.length < 8){
        $textoModalSenha.textContent = "Senha inválida!";
        $form.reset();
        showModal();
    } else {
        window.location.href = "/assets/pages/pets.html";
    }
    
}

function showModal(){
    const $modal = document.querySelector(".modal-erro");
    const $closeModalBtn = document.querySelector(".closeModalBtn");

    $closeModalBtn.addEventListener('click', function() {
        $modal.style.display = 'none';
      });

    $modal.style.display = "flex";
}

function closeModal(){
    const $modal = document.querySelector(".modal-erro");

    $modal.style.display = "none";

}

const intervalo = setInterval(closeModal, 3000);
