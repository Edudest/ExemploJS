$("#salario").click(function () {

    let nome = $("#nome").val();
    let idade = parseInt($("#idade").val());
    let numeroDependentes = parseInt($("#dependentes").val());
    let salarioBruto = parseFloat($("#salario_Bruto").val());

    if (isNaN(idade) || isNaN(numeroDependentes) || isNaN(salarioBruto)) {
        alert("Por favor preencher as caixas com os valores esperados");
        return;
    };

    let bonusIdade = null

    if (idade > 50) {
        bonusIdade = 300;
    } else {
        bonusIdade = 200;
    }

    let inss = salarioBruto * 0.08
    let valeTransporte = salarioBruto * 0.05

    let bonusDependentes = 50 * numeroDependentes

    let salarioLiquido = salarioBruto - inss - valeTransporte + bonusIdade + bonusDependentes

    alert(`Seu nome é: ${nome}`)
    alert(`Você possui: ${numeroDependentes} dependentes`)
    alert(`Seu salario bruto é: ${salarioBruto}`)
    alert(`Seu inss é: R$${inss}`)
    alert(`Seu vale transporte é: R$${valeTransporte}`)
    alert(`De acordo com suas informções seu salario liquido é: R$${salarioLiquido}`)
});