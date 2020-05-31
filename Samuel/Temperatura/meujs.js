// var imagem = document.getElementById("imagem");
// document.getElementById("arquivo").onchange = function(e) {
//     var arquivo = e.target.files[0]
//     formulario = new FormData();
//     formulario.append("img", arquivo)

var campo = document.getElementById('arquivo'); // conteudo do texfild
var temperatura = document.getElementById('temperatura'); //temperatura id da tag

function verificar() {
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + campo.value + ",br&appid=3fbe6eac819504a7b4be6b9863634ca4&lang=pt_br&units=metric", true);
    ajax.onreadystatechange = function() {
        if (ajax.readyState === 4 && ajax.status === 200) {
            var itens = JSON.parse(ajax.responseText)


            document.getElementById('temperatura').innerHTML = ("A temperatura em ( " + itens.name + " ) e de: " +
                itens.main.temp + " °C " + "com o clima: " + itens.weather[0].description + "!.");
        } else if (ajax.readyState === 4 && ajax.status === 404) {

            alert("Nome da cidade Não encontrado ou errado");

        }

    }
    ajax.send();
}

function limpar() {
    document.getElementById("arquivo").value = '';

}