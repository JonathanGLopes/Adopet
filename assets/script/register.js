const $form = document.querySelector(".form");

$form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    validaCampos();
});


function validaCampos(){
    const $inputEmail = document.querySelector(".form-input-email").value;
    const $inputNome = document.querySelector(".form-input-nome").value;
    const $inputSenha = document.querySelector(".form-input-senha").value;
    const $inputSenha2 = document.querySelector(".form-input-senha2").value;
    const $textoModalErro = document.querySelector(".modal-content-input");

    if($inputEmail === '' && $inputNome === '' && $inputSenha === '' && $inputSenha2 === ''){
        $textoModalErro.textContent = "Por favor, preencha os campos.";
        showModal();
        document.querySelector(".form-input-email").focus();
    } else {
        validaEmail();
        validaNome();
        validaSenha();
    }

}

function validaEmail(){
    const $inputEmail = document.querySelector(".form-input-email").value;
    const $textoModalEmail = document.querySelector(".modal-content-input");

    if($inputEmail === ''){
        $textoModalEmail.textContent = "Por favor, preencha o email";
        document.querySelector(".form-input-email").focus();
        showModal();
    }

}

function validaNome(){
    const $inputNome = document.querySelector(".form-input-nome").value;
    const $textoModalNome = document.querySelector(".modal-content-input");

    if($inputNome === ''){
        $textoModalNome.textContent = "Por favor, preencha o nome";
        showModal();
    } else if($inputNome.length < 3){
        $textoModalNome.textContent = "Nome inválido!";
        showModal();
    }
}

function validaSenha(){
    const $inputSenha = document.querySelector(".form-input-senha").value;
    const $inputSenha2 = document.querySelector(".form-input-senha2").value;
    const $textoModalSenha = document.querySelector(".modal-content-input");

    if($inputSenha === '' || $inputSenha2 === ''){
        $textoModalSenha.textContent = "Preencha a senha para continuar.";
        showModal();
    } else if($inputSenha !== $inputSenha2){
        $textoModalSenha.textContent = "As senhas são diferentes";
        showModal();
        return;
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