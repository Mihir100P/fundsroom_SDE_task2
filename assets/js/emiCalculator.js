function updateEmiInterestValue(val) {
    document.getElementById("emiInterestValue").innerText = val;
    document.getElementById("emiInterestHidden").value = val;
}

function calculateEMI() {
    let P = parseFloat(document.getElementById("emiLoanAmount").value); 
    let R = parseFloat(document.getElementById("emiInterestHidden").value) / 12 / 100; 
    let N = parseFloat(document.getElementById("emiTenure").value) * 12;

    if (isNaN(P) || isNaN(R) || isNaN(N) || P <= 0 || N <= 0) {
        showToast("Please enter valid inputs!", "error");
        return;
    }

    // EMI Formula
    let EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    let totalPayable = EMI * N;
    let totalInterest = totalPayable - P;

    document.getElementById("monthlyEmi").innerText = Math.round(EMI).toLocaleString();
    document.getElementById("totalInterest").innerText = Math.round(totalInterest).toLocaleString();
    document.getElementById("totalPayable").innerText = Math.round(totalPayable).toLocaleString();

    showToast("EMI calculated successfully!");

    //  Reset Inputs Properly
    document.getElementById("emiLoanAmount").value = "";
    document.getElementById("emiTenure").value = "";

    // Reset interest slider + hidden value + display
    document.getElementById("emiInterest").value = 8.5;
    document.getElementById("emiInterestValue").innerText = "8.5";
    document.getElementById("emiInterestHidden").value = 8.5;
}
