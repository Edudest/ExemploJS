$(document).ready(function () {
    $("#buscarClima").on("click", function () {
        const cidade = $("#cidadeClima").val().trim();

        if (cidade !== "") {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&lang=pt_br&appid=acc8aa1f041cafb90f18e26844c23274`;

            $.getJSON(url, function (data) {
                const nomeCidade = data.name;
                const pais = data.sys.country;
                const temperatura = data.main.temp;
                const vento = data.wind.speed;
                const descricao = data.weather[0].description;

                $("#resultadoClima")
                    .html(
                        `<strong>Cidade:</strong> ${nomeCidade}, ${pais}<br>
                        <strong>Temperatura:</strong> ${temperatura} °C<br>
                        <strong>Vento:</strong> ${vento} m/s<br>
                        <strong>Clima:</strong> ${descricao}`
                    )
                    .removeClass("d-none")
                    .removeClass("alert-danger")
                    .addClass("show");
            }).fail(function () {
                $("#resultadoClima")
                    .html("Erro ao buscar dados do clima.")
                    .removeClass("d-none")
                    .addClass("alert-danger");
            });
        } else {
            alert("Digite o nome da cidade.");
        }
    });
});
