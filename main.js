const form = document.getElementById("form-agenda");
const numero = []
const nome = []

let linhas = ''

form.addEventListener("submit", function(e) 
{
    e.preventDefault()

    addLinha()
    atualizartabela()
})

function addLinha () 
{
    const inputNome = document.getElementById("nome-agenda")
    const inputNumero = document.getElementById("numero-agenda")

    if (nome.includes(inputNome.value) || numero.includes(parseFloat(inputNumero.value))) {
        alert('Agendamento já existente!');
    } 
    else 
    {
        nome.push(inputNome.value);
        numero.push(parseFloat(inputNumero.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNumero.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }
        inputNome.value = ''
        inputNumero.value = ''
}

function atualizartabela () 
{
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}