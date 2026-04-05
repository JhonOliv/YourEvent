

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

const tabelaLogin = {
    dados: [
        {
            login: "jhonsilva",
            senha: "1234@"
        }
    ],
    certificados: [
        {
            codigo: 87646333,
            nomeParticipante: "Kevin de Bruyne",
            dataEvento: "2026-05-10"
        }
    ]

}


document.addEventListener("DOMContentLoaded", function () {
    if (window.location.href.includes("login")) {
        document.querySelector("#enviar").addEventListener("click", function () {
            let login = document.querySelector("#login").value
            let senha = document.querySelector("#senha").value

            console.log("OLA MUNDO".toLocaleLowerCase())
            tabelaLogin.dados.forEach((e) => {

                if (e.login == login.toLocaleLowerCase() && e.senha == senha.toLocaleLowerCase()) {
                    window.location.href ="https://youreventplan.netlify.app/vericerti";
                } else {
                    alert("Login ou Senha incorretos!")
                }

            })
        })

    }

})


document.addEventListener("DOMContentLoaded", function () {
    if (window.location.href.includes('veriCerti')) {

        console.log("Funcionando!")
        document.querySelector("#validar").addEventListener('click', function () {

            let codigo = document.querySelector("#codigo").value
            let nomeParticipante = document.querySelector("#nomeParticipante").value
            let dataEvento = document.querySelector("#data").value;
            let validar = document.querySelector("#rowValidar");

            console.log(typeof (codigo));
            console.log(typeof (nomeParticipante));
            console.log(typeof (dataEvento));

            tabelaLogin.certificados.forEach(function (e) {
                console.log(e.codigo);
                console.log(e.codigo == 87646333 ? true : false);
                console.log(dataEvento)
                if (e.codigo == parseInt(codigo) &&
                    e.nomeParticipante.toLocaleLowerCase().trim() == nomeParticipante.toLocaleLowerCase().trim()
                    && e.dataEvento == dataEvento) {
                    document.querySelector("#rowValidar").insertAdjacentHTML("beforeend", `
                            <div class="alert alert-success alert-dismissible"  role="alert">
                                Certificado validado com sucesso Cod: ${codigo} 
                               <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>'

                            </div>
`)
                } else {

                    const html = `
                            <div class="alert alert-danger alert-dismissible" role="alert">
                                Certificado não é valido tente novamente! Cod: ${codigo} 
                              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>'

                            </div>
                        `;

                    validar.insertAdjacentHTML('beforeend', html);
                }
            })
        })


    }
})