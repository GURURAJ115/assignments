function calculate() {
    const capital = parseFloat(document.getElementById("capital").value);
    const years = parseInt(document.getElementById("years").value, 10);
    const yearlyGain = parseFloat(document.getElementById("interest").value) / 100;
    const isCompound = document.getElementById("compound").checked;

    if (isNaN(capital) || isNaN(years) || isNaN(yearlyGain)) {
        alert("Please fill in all fields correctly!");
        return;
    }

    let totalValue = capital;

    if (isCompound) {
        for (let i = 0; i < years; i++) {
            totalValue += totalValue * yearlyGain;
        }
    } else {
        totalValue += capital * yearlyGain * years;
    }

    document.getElementById("result").innerText =
        `Net Portfolio Value: ₹ ${totalValue.toFixed(2)} Cr`;
}
