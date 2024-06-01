document.getElementById('calculate').addEventListener('click', function () {
    const valor = document.getElementById('value').value;
    const taxa = (document.getElementById('fee').value) / 100;
    const tempo = document.getElementById('time').value;

    const total = valor * (1 + taxa) ** tempo;

    document.getElementById('total').innerHTML = (total.toFixed(2) + ' CVE');
});