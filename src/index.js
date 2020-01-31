function barbecueCalc() {
    let plp = document.getElementById("qnt-people").value;
    let ptime = document.getElementById("party-time").value;

    let food = 100 * plp * ptime;
    let beer = 1 * plp * ptime;
    let soda = 100 * plp * ptime;

    document.getElementById("result-title").innerHTML = "Resultado";
    document.getElementById("result-food").innerHTML = food + "g de churrasco de gato,";
    document.getElementById("result-beer").innerHTML = beer + " latas de cerveja Cacildis,";
    document.getElementById("result-soda").innerHTML = soda + "ml de Guaraná Jesus.";
    ;

}