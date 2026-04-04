

const elements = document.querySelectorAll('.section, .card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});



document.addEventListener("DOMContentLoaded", function () {
    if (window.location.href.includes("login")) {
        const tabelaLogin = {
            dados: [
                {
                    login: "jhonsilva",
                    senha: "1234@"
                }
            ],

        }


        document.querySelector("#enviar").addEventListener("click", function () {
            let login = document.querySelector("#login").value
            let senha = document.querySelector("#senha").value

            console.log("OLA MUNDO".toLocaleLowerCase())
            tabelaLogin.dados.forEach((e) => {

                console.log(login)
                console.log(senha);
                console.log(e.login);

                if (e.login == login.toLocaleLowerCase() && e.senha == senha.toLocaleLowerCase()) {
                    window.location.href = "http://localhost:5500/veriCerti.html";
                } else {
                    alert("Login ou Senha incorretos!")
                }

            })
        })

    }
})