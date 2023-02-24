const $form = document.querySelector(".form");

$form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    validaEmail();
    validaNome();
    // showModal();
});

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