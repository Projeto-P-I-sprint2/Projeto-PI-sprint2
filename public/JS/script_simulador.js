var produFP = 0
var produFI = 0
var qP = 0
var qPA = 0
var c1 = 0
var c2 = 0
function calcular() {
    var qF = Number(quantidadeFuncionarios.value)
    var qdt = Number(qntdDiasTrabalho.value)
    var qht = Number(qntdHorasTrabalho.value)
    var qhc = Number(qntdHorasCumpridas.value)
    var pF = Number(produtosFeitos.value)
    var pP = Number(produtosPreco.value)

    if (qdt < 0 || qht < 0 || qht < 0) {
        alert(`Valores na quantidade de dias ou horas trabalhados errôneos.`)
    } else if (qdt > 31) {
        alert(`Valores na quantidade de dias trabalhados exorbitantes, a quantidade máxima possivel de dias trabalhados no mês é de 31 dias e não ${qdt} dias.`)
    } else if (qht > 744) {
        alert(`Valores na quantidade de horas exorbitantes, sendo possivel trabalhar 744 horas no mês.`)
    } else if (qhc > qht) {
        alert(`Valores na quantidade de horas cumpridas exorbitantes.`)
    } else {
        qdt *= qF // Calculo do dias de trabalho de todos os funcionários
        var produF = (qhc / pF) * qdt // Calculo da quantidade de produtos feitos real no mês
        var produI = (qht / pF) * qdt // Calculo da quantidade de produtos feitos ideal no mês
        produFP = produF * pP // Calculo do lucro no mês real
        produFI = produI * pP // Calculo do lucro no mês ideal
        qP = produFI - produFP // Calculo da Perca de dinheiro
        qPA = qP * 12

        c1 = ((produFP * 100) / produFI)
        c2 = 100 - ((produFP * 100) / produFI) // Calculo da porcentagem de perca

        dadosLucro.innerHTML = `${produFP.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`
        dadosLucroF.innerHTML = `${produFI.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`
        perca.innerHTML = `${c2.toFixed(1)}% de perca para sua empresa comparado aos horarios se fossem cumpridos.`

        //ChartJS
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Perca'],
                datasets: [{
                    label: 'Perca Anual',
                    data: [qPA],
                    fill: false,
                    backgroundColor: 'rgb(0, 255, 0, 0.2)',
                    borderColor: 'rgb(0, 25, 0)',
                    tension: 0.1
                },
                {
                    label: 'Perca Mensal',
                    data: [qP],
                    fill: false,
                    backgroundColor: 'rgb(255, 0, 0, 0.2)',
                    borderColor: 'rgb(255, 0, 0)',
                    tension: 0.1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        const ctx2 = document.getElementById('myChart2').getContext('2d');
        const myChart2 = new Chart(ctx2, {
            type: 'pie',
            data: {
                labels: [
                    'Quanto você ganha',
                    'Quanto você perde'
                ],
                datasets: [{
                    label: 'My First Dataset',
                    data: [c1, c2],
                    backgroundColor: [
                        'rgb(0, 255, 0)',
                        'rgb(255, 0, 0)'
                    ],
                    hoverOffset: 4
                }]
            }
        });
    }
}

function funcionario() {
    alert("Insira a quantidade de funcionários da sua empresa ao todo.")
}
function dTrabalho() {
    alert("Insira a quantidade de dias trabalhados da sua empresa no mês.")
}
function hTrabalho() {
    alert("Insira a quantidade de horas de trabalho totais de todos os funcionários no mês.")
}
function hCumprido() {
    alert("Insira a quantidade de horas trabalhadas cumpridas totais de todos os funcionários no mês.")
}
function qntdProdutos() {
    alert("Insira a quantidade de Produtos/Serviços feitos ou Realizados no dia, por cada funcionário.")
}
function LucroProdutos() {
    alert("Insira a quantidade de lucro por cada Produtos/Serviços na sua empresa.")
}