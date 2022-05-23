function entrar() {
    //aguardar();

    var formulario = new URLSearchParams(new FormData(document.getElementById("form_login")));

    console.log("FORM LOGIN: ", formulario.get("login"));
    console.log("FORM SENHA: ", formulario.get("senha"));

    fetch("/usuarios/autenticar", {
        method: "POST",
        body: formulario
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.LOGIN_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nomeFuncionario;
                sessionStorage.ID_USUARIO = json.IDfuncionario;
                sessionStorage.NOME_EMPRESA = json.nomeEmpresa;
                sessionStorage.ID_EMPRESA = json.IDempresa;
                sessionStorage.ID_CARGO = json.IDcargo;

                setTimeout(function () {
                    window.location = "/index.html";
                }, 1000);
            });

        } else {

            console.log("Erro de login!");

            resposta.text().then(texto => {
                console.error(texto);
                // limparFormulario();
                finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}

function validarSessao() {
    //aguardar();

    var id = sessionStorage.ID_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var empresa = sessionStorage.NOME_EMPRESA;
    var cargo = sessionStorage.ID_CARGO;

    var botao = `<li><a href="telaCadastro.html" class="agora">Cadastro</a></li>`

    var h1Titulo = document.getElementById("nome_empresa");
    var spanCadastro = document.getElementById("span_cadastro");

    if (nome != null && id != null) {
        //alert(`Seja bem-vindo, ${nome}!`);
        h1Titulo.innerHTML = `${empresa}`;

        if (cargo == 1 || cargo == 2) {
            spanCadastro.innerHTML = `${botao}`;
        }

        finalizarAguardar();
    } else {
        window.location = "telaLogin.html";

    }
}

function sair() {
    aguardar();
    sessionStorage.clear();
    finalizarAguardar();
    window.location = "telaLogin.html";
}