function Tempo(){
    var data = new Date()
    var semana = data.getDay()
    var dia = data.getDate()
    var mes = data.getMonth()
    var ano = data.getFullYear()

    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundos = data.getSeconds()

    //Inserir 0 antes quando houver 1 casa 
    if (segundos < 10) {
        segundos = "0"+segundos
    }
    if (minuto < 10) {
        minuto = "0"+minuto
    }

    //Criando Array dos mes
    m=new Array()
    m[0] = 'Janeiro'
    m[1] = 'Fevereiro'
    m[2] = 'Março'
    m[3] = 'Abril'
    m[4] = 'Maio'
    m[5] = 'Junho'
    m[6] = 'Julho'
    m[7] = 'Agosto'
    m[8] = 'Setembro'
    m[9] = 'Outubro'
    m[10] = 'Novembro'
    m[11] = 'Dezembro'

    //Criando Array dos dias da semana
    s=new Array()
    s[0] = 'Domingo'
    s[1] = 'Segunda'
    s[2] = 'Terça'
    s[3] = 'Quarta'
    s[4] = 'Quinta'
    s[5] = 'Sexta'
    s[6] = 'Sábado'

    //  document.getElementById('hora').innerText=(s[semana]+", "+ dia + " de " + m[mes] + " de " + ano + ". Agora são: " + hora + ":" + minuto + ":" + segundos);

    document.getElementById('hora').innerText= (`${s[semana]}, ${dia} de ${m[mes]} de ${ano}. Agora são: ${hora}:${minuto}:${segundos}`);

    //Atualizar o tempo todo
    setTimeout('Tempo', '1000')
}
function FraseDia(){
    msg = new Array()
    msg[1] = "Mensagem do dia 01"
    msg[2] = "Mensagem do dia 02"
    msg[3] = "Mensagem do dia 03"
    msg[4] = "Mensagem do dia 04"
    msg[5] = "Mensagem do dia 05"
    msg[6] = "Mensagem do dia 06"
    msg[7] = "Mensagem do dia 07"
    msg[8] = "Mensagem do dia 08"
    msg[9] = "Mensagem do dia 09"
    msg[10] = "Mensagem do dia 10"
    msg[11] = "Mensagem do dia 11"
    msg[12] = "Mensagem do dia 12"
    msg[13] = "Mensagem do dia 13"
    msg[14] = "Mensagem do dia 14"
    msg[15] = "Mensagem do dia 15"
    msg[16] = "Mensagem do dia 16"
    msg[17] = "Mensagem do dia 17"
    msg[18] = "Mensagem do dia 18"
    msg[19] = "Mensagem do dia 19"
    msg[20] = "Mensagem do dia 20"
    msg[21] = "Mensagem do dia 21"
    msg[22] = "Mensagem do dia 22"
    msg[23] = "Mensagem do dia 23"
    msg[24] = "Mensagem do dia 24"
    msg[25] = "Mensagem do dia 25"
    msg[26] = "Mensagem do dia 26"
    msg[27] = "Mensagem do dia 27"
    msg[28] = "Mensagem do dia 28"
    msg[29] = "Mensagem do dia 29"
    msg[30] = "Mensagem do dia 30"
    msg[31] = "Mensagem do dia 31"


    data = new Date()
    dia = data.getDate()

    document.getElementById('msg').innerText = msg[dia]
}