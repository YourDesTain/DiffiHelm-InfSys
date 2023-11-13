function randp() {
    var randomValue = Math.floor(Math.random() * 100000) + 1; //числа от 1 до 1000
    document.getElementById("p").value = randomValue;
}

function randg() {
    var randomValue = Math.floor(Math.random() * 1000) + 1; //числа от 1 до 100
    document.getElementById("g").value = randomValue;
}

function randa() {
    var randomValue = Math.floor(Math.random() * 250) + 1; //числа от 1 до 50
    document.getElementById("a").value = randomValue;
}

function randb() {
    var randomValue = Math.floor(Math.random() * 250) + 1; //числа от 1 до 50
    document.getElementById("b").value = randomValue;
}

function compute(obj) {
    var base = obj.base.value;
    var modulus = obj.modulus.value;

    var private_A = obj.private_A.value;
    var public_A = discrete_exp(base, private_A, modulus);

    var private_B = obj.private_B.value;
    var public_B = discrete_exp(base, private_B, modulus);

    obj.public_A.value = public_A;
    obj.public_B.value = public_B;

    obj.dh_A.value = discrete_exp(public_B, private_A, modulus);
    obj.dh_B.value = discrete_exp(public_A, private_B, modulus);
}

function calculateKey() {
    const p = parseInt(document.getElementById('p').value);
    const g = parseInt(document.getElementById('g').value);
    const a = parseInt(document.getElementById('a').value);
    const b = parseInt(document.getElementById('b').value);

    const A = discrete_exp(g, a, p);
    const B = discrete_exp(g, b, p);

    const sharedKeyA = discrete_exp(B, a, p);
    const sharedKeyB = discrete_exp(A, b, p);

    document.getElementById('result').innerText = `Секретный ключ (Алиса): ${sharedKeyA}\nСекретный ключ (Боб): ${sharedKeyB}`;
}

function discrete_exp(base, exponent, modulus) {
    let result = 1;
    base = base % modulus;

    while (exponent > 0) {
        if (exponent % 2 === 1) {
            result = (result * base) % modulus;
        }

        exponent = Math.floor(exponent / 2);
        base = (base * base) % modulus;
    }

    return result;
}
