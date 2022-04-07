function calcular() {
    var qntdF = Number(quantidadeFuncionarios.value)
    var hT = Number(horasTrabalhados.value)
    var dT = Number(diasTrabalhados.value)
    var qntdFF = Number(qntdFaltasFunc.value)
    var aF = Number(atrasoFuncionario.value)
    var qntdSP = Number(quantidadeServicoProduto.value)

    var R1 = (qntdF * hT) * dT //Calculo das horas trabalhadas no mês
    var fH = qntdFF * 6 //Calculo das horas de atraso dos funcionários
    var fM = (aF * qntdF) / 60 //Calculo dos minutos de atraso dos funcionários
    var fHM = fH + fM //Calculo das horas de abstenção no mês
    var mAb = fHM * 12 //Calculo das horas de abstenção no ano
    var Abstencao = (fHM/R1) * 100 //Calculo com a porcentagem de abstenção no mês

    var prod = qntdSP / hT

    HorasA.innerHTML = `${fHM.toFixed(2)} Horas`
    HorasAM.innerHTML = `${mAb.toFixed(2)} Horas de abstenção`

    Absenteismo.innerHTML = `${Abstencao.toFixed(2)}% de absenteísmo no mês`

    Produtividade.innerHTML = `${prod.toFixed(1)} de produtos/serviços realizados por hora.`
}
function funcionario(){
    alert("Insira a quantidade de funcionários da sua empresa ao todo.")
}
function jornada(){
    alert("Insira a jornada, ou seja, a hora trabalhada de todos os funcionários da sua empresa.")
}
function dTrabalho(){
    alert("Insira a quantidade de dias trabalhados da sua empresa no mês.")
}
function qntdFalta(){
    alert("Insira a quantidade de faltas totais dos funcionários na sua empresa no mês.")
}
function mPerdido(){
    alert("Insira o total de minutos perdidos, ou seja, a quantidade de atrasos ou saídas antecipadas dos seus funcionários na sua empresa no mês.")
}
function proServ(){
    alert("Quantidade(s) de produtos ou serviços realizados em um dia.")
}