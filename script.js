let lista = []
let total = 0

function adicionarItem() {
    // Cria o novo item
    let item = {}
    item.descricao = document.getElementById("descricao").value
    item.quantidade = Number(document.getElementById("quantidade").value) // converte para numérico 
    item.valor = Number(document.getElementById("valor").value)

    // Adiciona o novo item no vetor
    lista.push(item)

    // Atualizar o total
    total += (item.valor * item.quantidade)
    atualizarTotal(item)

    // Atualizar a tabela
    atualizarTabela()
}

function atualizarTabela() {

    let tabela = document.getElementById("tabela")
    // Limpar a tabela
    tabela.innerHTML = ""

    for(let cont = 0; cont < lista.length; cont++) {
        tabela.innerHTML += `
        <tr>
            <td>${lista[cont].descricao}</td>
            <td>${lista[cont].quantidade}</td>
            <td>${formatarMoeda(lista[cont].valor)}</td>
        </tr>
        `
    }
}

function formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
}

function atualizarTotal() {
    let totalFormatado = formatarMoeda(total)
    document.getElementById("total").innerHTML = totalFormatado
}

atualizarTotal()