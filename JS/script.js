// ======================================
// MENU HAMBÚRGUER
// ======================================


const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {
            menuToggle.innerHTML = "✖";
        } else {
            menuToggle.innerHTML = "☰";
        }

    });

}
// ======================================
// VALIDAÇÃO DO FORMULÁRIO
// ======================================

const formulario = document.getElementById("formContato");

if (formulario) {


formulario.addEventListener("submit", function(event) {

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nome === "" || email === "" || mensagem === "") {

        alert("Preencha todos os campos obrigatórios.");

        event.preventDefault();

        return;
    }

    if (!emailRegex.test(email)) {

        alert("Digite um e-mail válido.");

        event.preventDefault();

        return;
    }

    alert("Mensagem enviada com sucesso!");
});


}

// ======================================
// SCROLL SUAVE
// ======================================

document.querySelectorAll('a[href^="#"]').forEach(link => {


link.addEventListener('click', function(e) {

    e.preventDefault();

    const destino =
    document.querySelector(this.getAttribute('href'));

    if(destino){

        destino.scrollIntoView({
            behavior: 'smooth'
        });

    }

});


});
