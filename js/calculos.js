$("#calcular").click(function () {
    let v1 = parseFloat($("#txtvalor1").val());
    let v2 = parseFloat($("#txtvalor2").val());
    let v3 = parseFloat($("#txtvalor3").val());

    if (isNaN(v1) || isNaN(v2) || isNaN(v3)) {
        alert('Digite numeros validos em todas as caixas')
        return;
    }

    let media = parseFloat(((v1 + v2 + v3) / 3).toFixed(2));

    let moeda = media.toLocaleString('pt-BR',
        {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: '2'
        });

    $('#txtmedia')
        .text('A media é: ' + moeda)
        .css({ 'font-wieght': 'bold', 'font-siza': '18pt', 'color': '#00f' });

    if (media > 6) {
        alert('Valor acima de 6: ' + media);
        console.log('valor acima de 6: ' + media);
        $('#txtmsg')
            .text('Valor acima de 6: ' + media)
            .css({ 'font-wieght': 'bold', 'font-siza': '18pt', 'color': '#00f' });
    } else {
        alert('Valor menor que 6:' + media);
        console.log('Valor menor ou igual a 6:' + media);
        $('#txtmsg')
            .text('Valor menor ou igual a 6: ' + media)
            .css({ 'font-wieght': 'bold', 'font-siza': '18pt', 'color': '#00f' });
    }

    let mostrar = "da média";
    mostrar = (media > 6) ? "acima " + mostrar : "abaixo " + mostrar;
    alert("If ternario - resultado: " + mostrar);

    let mensagem = "a media é ";

    switch (parseInt(media) % 2) {
        case 0:
            mensagem += "par";
            break;
        case 1:
            mensagem += "impar";
            break;
        default:
            mensagem = "erro";
            break;
    }

    alert(mensagem);

    switch (true) {
        case (media > 10):
            mensagem += "maior que 10";
            break;
        case (media > 5):
            mensagem += "maior que 5";
            break;

        default:
            mensagem += "Menor ou igual a 5";
            break;
    }

    alert(mensagem);

    let fatorial = 1;

    for (let i = 1; i <= v1; i++) {
        fatorial *= i;
    }

    $('#txtfatorial')
        .text('o fatorial de ' + v1 + ' é: ' + fatorial)
        .css({ 'font-wieght': 'bold', 'font-siza': '18pt', 'color': '#00f' });
});