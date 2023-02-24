const $form = document.querySelector(".form");

$form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    validaEmail();
    showModal();
});

function validaEmail(){
    const $inputEmail = document.querySelector(".form-input").value;
    const $textoModalEmail = document.querySelector(".modal-content-input");

    if($inputEmail.length < 15){
        $textoModalEmail.textContent = "Email inválido.";
        document.querySelector(".form-input").focus();
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