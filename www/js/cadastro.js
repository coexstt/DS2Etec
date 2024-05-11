function enviar(){
    const dbParam = JSON.stringify(
        {
            "Nome": document.querySelector("#nome").value,
            "Celular": document.querySelector("#celular").value,
            "CEP": document.querySelector("#cep").value,
            "Endereço": document.querySelector("#logradouro").value,
            "Cidade": document.querySelector("#localidade").value,
            "Estado": document.querySelector("#uf").value
        }
    );
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
        const myObj = JSON.parse(this.responseText);
        console.log(myObj);
        document.getElementById("demo").innerHTML = myObj;
    }
    xmlhttp.open("POST", "http://etec.fernandograciano.com.br/cadastrocliente.php");
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("dados="+dbParam );
}