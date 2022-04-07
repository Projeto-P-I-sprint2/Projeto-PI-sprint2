function calcular() {
    var qntdF = Number(quantidadeFuncionarios.value)
    var hT = Number(horasTrabalhados.value)
    var dT = Number(diasTrabalhados.value)
    var qntdFF = Number(qntdFaltasFunc.value)
    var aF = Number(atrasoFuncionario.value)
    var mS = Number(mSalario.value)

    var R1 = qntdF * hT * dT //Calculo das horas trabalhadas no mês
    var fH = qntdFF * 6 //Calculo das horas de atraso dos funcionários
    var fM = (aF * qntdF) / 60 //Calculo dos minutos de atraso dos funcionários
    var fHM = fH + fM //Calculo das horas de abstenção no mês
    var mAb = fHM * 12 //Calculo das horas de abstenção no ano
    var Abstencao = (fHM/R1) * 100 //Calculo com a porcentagem de abstenção no mês

    var salarioH = mS / dT / hT //Calculo com o salário por hora em média

    // var salarioPerdido = (salarioH * hT) * dT
    var lucro = ((salarioH * hT) * dT) * qntdF
    var salarioPerdidoMensal = (salarioH * hT) * dT
    alert (`${hSeila}`)

    // var salarioPerdido = (((salarioH * fHM) - (salarioH * hT) * dT)) * 12 //Calculo da Perca de salário por mês
    // var salarioPerdidoMensal = salarioPerdido / 12 //Calculo da Perca de salário por mês

    dadosQntdF.innerHTML = qntdF + ' Funcionários'
    if( qntdF <= 100 ){
        altoBaixo1.innerHTML = `Baixo`
    }else{
        altoBaixo1.innerHTML = `Alto`
    }
    rSalario.innerHTML = salarioH.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    if( salarioH <= 40 ){
        altoBaixo2.innerHTML = `Baixo`
    }else{
        altoBaixo2.innerHTML = `Alto`
    }

    HorasA.innerHTML = `${fHM.toFixed(2)} Horas`
    HorasAM.innerHTML = `${mAb.toFixed(2)} Horas de abstenção`

    percaSalarioM.innerHTML = salarioPerdidoMensal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    if( salarioPerdidoMensal <= 1000 ){
        altoBaixo3.innerHTML = `Baixo`
    }else{
        altoBaixo3.innerHTML = `Alto`
    }
    percaSalarioA.innerHTML = salarioPerdido.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    if( salarioPerdido <= 10000 ){
        altoBaixo4.innerHTML = `Baixo`
    }else{
        altoBaixo4.innerHTML = `Alto`
    }

    Absenteismo.innerHTML = `${Abstencao.toFixed(2)}% de absenteísmo no mês`
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
function sLiquido(){
    alert("Insira a média salárial dos seus funcionários, contando com os beneficios.")
}