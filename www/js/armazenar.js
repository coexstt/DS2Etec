function salvarLocal(chave, valor)
{
    localStorage.setItem(chave, valor)
    localStorage.setItem("Idade", 25)
    localStorage.setItem("ID_usuario", 777)
    localStorage.setItem("ListaProdutos", ["Iphone", "MacBook", "Tesla"])
}

function lerLocal()
{
    console.log( localStorage.getItem("Idade"))
    console.log( localStorage.getItem("ListaProdutos"))
    console.log( localStorage.getItem("ID_usuario"))
}