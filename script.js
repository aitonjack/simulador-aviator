document.getElementById('generate-btn').addEventListener('click', () => {
    const randomMultiplier = (Math.random() * 10).toFixed(2);
    document.getElementById('result').textContent = `Número gerado: ${randomMultiplier}x`;
});
