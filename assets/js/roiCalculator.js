function calculateROI() {
  let purchasePrice = parseFloat(document.getElementById("purchasePrice").value);
  let rentalIncome = parseFloat(document.getElementById("rentalIncome").value);
  let appreciation = parseFloat(document.getElementById("appreciation").value);
  let maintenance = parseFloat(document.getElementById("maintenance").value);

  if (!purchasePrice || !rentalIncome || !appreciation || !maintenance) {
    showToast("Please fill all ROI fields.", "warning");
    return;
  }

  // Annual Net Income
  let netIncome = rentalIncome - maintenance;

  // Annual Appreciation Value
  let appreciationValue = (purchasePrice * appreciation) / 100;

  // Total Annual Profit
  let totalAnnualProfit = netIncome + appreciationValue;

  // Annual ROI %
  let roi = (totalAnnualProfit / purchasePrice) * 100;

  // 5-Year Projection
  let fiveYearProfit = totalAnnualProfit * 5;

  // Display Results
  document.getElementById("annualROI").innerText = roi.toFixed(2);
  document.getElementById("fiveYearProfit").innerText = fiveYearProfit.toFixed(0);

  showToast("ROI calculated successfully!", "success");

  //Clear fields after calculation
  document.getElementById("purchasePrice").value = "";
  document.getElementById("rentalIncome").value = "";
  document.getElementById("maintenance").value = "";
  document.getElementById("appreciation").value = 5;
  document.getElementById("appreciationValue").innerText = 5;
}

function updateAppreciationValue(value) {
  document.getElementById("appreciationValue").innerText = value;
  document.getElementById("appreciationHidden").value = value;
}