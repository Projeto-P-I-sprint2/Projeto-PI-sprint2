var database = require("../database/config");

function buscarUltimasMedidas(idSala, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        lm35_temperatura as temperatura, 
        luminosidade as luminosidade,  
                        data_hora,
                        CONVERT(varchar, data_hora, 108) as momento_grafico
                    from historico
                    join arduino on arduino.IDarduino = historico.fk_sensor
                    where fk_sala = ${idSala}
                    order by IDhistorico desc;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        lm35_temperatura as temperatura, 
        luminosidade as luminosidade,
                        data_hora,
                        DATE_FORMAT(data_hora,'%H:%i:%s') as momento_grafico
                        from historico
                        join arduino on arduino.IDarduino = historico.fk_sensor
                        where fk_sala = ${idSala}
                    order by IDhistorico desc limit ${limite_linhas};`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idSala) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        lm35_temperatura as temperatura, 
        luminosidade as luminosidade,  
                        CONVERT(varchar, data_hora, 108) as momento_grafico 
                        from historico
                        join arduino on arduino.IDarduino = historico.fk_sensor
                        where fk_sala = ${idSala}
                    order by IDhistorico desc;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        lm35_temperatura as temperatura, 
        luminosidade as luminosidade,
                        DATE_FORMAT(data_hora,'%H:%i:%s') as momento_grafico 
                        from historico
                        join arduino on arduino.IDarduino = historico.fk_sensor
                        where fk_sala = ${idSala}
                    order by IDhistorico desc limit 1;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}