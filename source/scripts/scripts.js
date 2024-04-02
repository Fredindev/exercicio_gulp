
function info() {
    let meses = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro')
    let semanas = new Array('Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado')
    let agora = new Date
    let saida = document.getElementById('saida')
    let dia = agora.getDate()
    let mes = agora.getMonth()
    let ano = agora.getFullYear()
    let semana = agora.getDay()
    let hora = agora.getHours()
    let minutos = agora.getMinutes()
    let segundos = agora.getSeconds()

    saida.innerHTML = `<p>Dia - <mark>${dia}</mark></p>`
    saida.innerHTML += `<p>Mês - <mark>${meses[mes]}</mark></p>`
    saida.innerHTML += `<p>Ano - <mark>${ano}</mark></p>`
    saida.innerHTML += `<p>Dia da semana - <mark>${semanas[semana]}</mark></p>`
    saida.innerHTML += `<p>Hora - <mark>${hora}</mark></p>`
    saida.innerHTML += `<p>Minutos - <mark>${minutos}</mark></p>`
    saida.innerHTML += `<p>Segundos - <mark>${segundos}</mark></p>`
}