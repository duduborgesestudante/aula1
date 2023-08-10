
function salario(){
    var anual = Number (document.getElementById("sa").value)
    var piso = Number (document.getElementById("psm").value)
    var mensal = anual/12
    document.getElementById("mensal").innerHTML = ("O salário mensal do funcionario é: "+  mensal)
    if (mensal > piso){
        document.getElementById("resultado").innerHTML = ("O salário do funcionario é maior que o piso!")
    }
    if(mensal == piso){
        document.getElementById("resultado").innerHTML = ("O salário do funcionario é igual que o piso!")
    }
    if(mensal < piso){
        document.getElementById("resultado").innerHTML = ("O salário do funcionario não é maior que o piso!")
    }
}
function pagVisual(){
    window.location.href="visualg.html"
}
function pagJs(){
    window.location.href = "java.html"
}