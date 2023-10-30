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
