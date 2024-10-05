/**
 * APP Helth Calc
 * Calculadora de métricas de saúde
 * @author Andrew Dantas
 * @version 1.0
 * @link https://github.com/andrewdantas/health.git
 */

// Variáveis
let peso, altura, imc, idade, fcm, litros, get

function calcular() {
    //captura das variáveis idade, peso e altura
    idade = frmHealth.txtIdade.value
    peso = frmHealth.txtPeso.value
    altura = (frmHealth.txtAltura.value) / 100 // converter cm em m
    //validação do campos obrigatórios(todos)
    if (frmHealth.txtIdade.value === "") {
        alert("Preencha a Idade")
        frmHealth.txtIdade.focus()
    } else if (frmHealth.txtPeso.value === "") {
        alert("Informe o seu Peso")
        frmHealth.txtPeso.focus()
    } else if (frmHealth.txtAltura.value === "") {
        alert("Informe a sua Altura em centímetros")
        frmHealth.txtAltura.focus()
    } else if (document.getElementById("m").checked === false && document.getElementById("f").checked === false) {
        alert("Selecione o sexo")
    } else if (frmHealth.nivel.value === "") {
        alert("Selecione o nível de atividade")
    } else {
        // lógica principal
        // Cálculo do IMC
        imc = peso / (altura * altura)
        document.getElementById("imc").innerHTML = `IMC: ${imc.toFixed(2)}`

        if (imc < 18.5) {
            document.getElementById("status").innerHTML = "Abaixo do peso"
            document.getElementById("grafico").src = "img/baixo.png"
        } else if (imc < 25) {
            document.getElementById("status").innerHTML = "Peso normal"
            document.getElementById("grafico").src = "img/normal.png"
        } else if (imc < 30) {
            document.getElementById("status").innerHTML = "Acima do Peso"
            document.getElementById("grafico").src = "img/sobrepeso.png"

        } else if (imc < 35) {
            document.getElementById("status").innerHTML = "Obesidade I"
            document.getElementById("grafico").src = "img/obesidade1.png"

        } else if (imc < 40) {
            document.getElementById("status").innerHTML = "Obesidade II (Severa)"
            document.getElementById("grafico").src = "img/obesidade2.png"

        } else {
            document.getElementById("status").innerHTML = "Obesidade III (mórbida)"
            document.getElementById("grafico").src = "img/obesidadeExtrema.png"

        } 
        // FCM
        fcm = 208 - (0.7 * idade)
        document.getElementById("fcm-text").innerHTML = fcm
        // consumo de água
        litros = (peso * 35) / 1000
        document.getElementById("agua").innerHTML = `${litros.toFixed(1)} litros/dia`
        //get >>>>>>>>>>>>>>>>>>
        //Passo 1: Capturar o valor da lista(combobox)
        let lista = document.getElementById('atividade')
        let valor = Number(lista.options[lista.selectedIndex].value)
        console.log(valor) // teste importante
        //Passo 2: executar uma fórmula diferente para o sexo selecionado
        if (document.getElementById("m").checked === true) {
            //console.log("fórmula. homens)") - teste
            get = (66 + (13.7 * peso) + (5 * altura * 100) - (6.8 * idade)) * valor
        }
        if (document.getElementById("f").checked === true) {
            //console.log("fórmula. mulheres)") - teste
            get = (655 + (9.6 * peso) + (1.8 * altura * 100) - (4.7 * idade)) * valor
        }
        // Passo 3: exibir resultado
        // (Math.floor - converte para número inteiro)
        document.getElementById('calorias').innerHTML = `${Math.floor(get)} caloria/dia`

    }
}

    function limpar() {
        document.getElementById('imc').innerHTML = "IMC"
        document.getElementById('status').innerHTML = "Status"
        document.getElementById('fcm-text').innerHTML = "FCM"
        document.getElementById('calorias').innerHTML = "Calorias/dia"
        document.getElementById('agua').innerHTML = "Litros/dia"
        document.getElementById('grafico').src = "img/reset.png"
    }