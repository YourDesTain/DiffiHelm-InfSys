function randp() {
    var randomValue = Math.floor(Math.random() * 1000) + 1; //числа от 1 до 1000
    document.getElementById("p").value = randomValue;
}

function randg() {
    var randomValue = Math.floor(Math.random() * 100) + 1; //числа от 1 до 100
    document.getElementById("g").value = randomValue;
}

function randa() {
    var randomValue = Math.floor(Math.random() * 50) + 1; //числа от 1 до 50
    document.getElementById("a").value = randomValue;
}

function randb() {
    var randomValue = Math.floor(Math.random() * 50) + 1; //числа от 1 до 50
    document.getElementById("b").value = randomValue;
}

function calculateKey() {

    const p = parseInt(document.getElementById('p').value);
    const g = parseInt(document.getElementById('g').value);
    const a = parseInt(document.getElementById('a').value);
    const b = parseInt(document.getElementById('b').value);

    const A = Math.pow(g, a) % p;
    const B = Math.pow(g, b) % p;

    const sharedKeyA = Math.pow(B, a) % p;
    const sharedKeyB = Math.pow(A, b) % p;

    document.getElementById('result').innerText = `Секретный ключ (Алиса): ${sharedKeyA}\nСекретный ключ (Боб): ${sharedKeyB}`;
}
