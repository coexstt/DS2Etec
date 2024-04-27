function consultaCep(){ //criando função para consultar API

    let campo = document.querySelector("#cep")
    let requisicao = new XMLHttpRequest(); // definindo os prarametros da requisição
    let url = "https://viacep.com.br/ws/" + campo.value + "/json/";
    requisicao.open("GET", url); // primeiramente fazendo a abertura do url
    requisicao.send(); // envia a requisição para a API
    requisicao.onload = function(){ // retorno quando a função foi executada com sucesso
        let objetoCEP = JSON.parse(requisicao.response)
        let campoLocalidade = document.querySelector("#localidade")
        let campoUF = document.querySelector("#uf")
        let campoEndereco = document.querySelector("#logradouro")
        let campoComplemento = document.querySelector("#complemento")

        campoLocalidade.value = objetoCEP.localidade 
        campoUF.value = objetoCEP.uf
        campoEndereco.value = objetoCEP.logradouro
        campoComplemento.value = objetoCEP.complemento
        //alert(objetoCEP.localidade + "-" + objetoCEP.uf + ", " + objetoCEP.logradouro + " " + objetoCEP.complemento)
    }
}

let botao = document.querySelector("#botao") // cria a váriavel em JS usando como base o ID "botão" no HTML
botao.addEventListener("click", consultaCep) // aguarda o acionamento do botão para poder executar a função criada acima