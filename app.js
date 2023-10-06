const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Validação simples
        if (nameInput.value.trim() === "") {
            alert("Por favor, preencha o campo Nome.");
            nameInput.focus();
            return false;
        }

        if (emailInput.value.trim() === "") {
            alert("Por favor, preencha o campo Email.");
            emailInput.focus();
            return false;
        }

        // Se todos os campos estiverem preenchidos, você pode enviar o formulário aqui
        alert("O formulário foi enviado com sucesso!");
        contactForm.reset();
    });
});
