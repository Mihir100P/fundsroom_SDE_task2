function calculateLoan() {
  let salaryInput = document.getElementById("salary");
  let emiInput = document.getElementById("emi");
  let tenureInput = document.getElementById("tenure");
  let interestInput = document.getElementById("interest");

  let salary = parseFloat(salaryInput.value);
  let existingEmi = parseFloat(emiInput.value) || 0;
  let tenure = parseFloat(tenureInput.value);
  let interest = parseFloat(interestInput.value);

  if (!salary || !tenure || !interest) {
    showToast("Please enter all required values.", "warning");
    return;
  }

  // Step 1: Available EMI (60% rule)
  let maxEmiAllowed = (salary * 0.6) - existingEmi;

  if (maxEmiAllowed <= 0) {
    showToast("You are not eligible for a loan based on your current EMIs.", "error");
    return;
  }

  // Step 2: Convert Annual Interest to Monthly
  let monthlyRate = interest / 12 / 100;
  let months = tenure * 12;

  // Step 3: EMI Formula (Reverse)
  let loanAmount =
    (maxEmiAllowed * (Math.pow(1 + monthlyRate, months) - 1)) /
    (monthlyRate * Math.pow(1 + monthlyRate, months));

  // Step 4: Show Results
  document.getElementById("maxLoan").innerText = loanAmount.toFixed(0);
  document.getElementById("recommendedEmi").innerText = maxEmiAllowed.toFixed(0);

  showToast("Loan eligibility calculated successfully!", "success");

  // Clear inputs after success
  salaryInput.value = "";
  emiInput.value = "";
  tenureInput.value = "";
  interestInput.value= 8.5;
  document.getElementById("interestValue").innerText = 8.5;
}

function updateInterestValue(value) {
  document.getElementById("interestValue").innerText = value;
  document.getElementById("interestHidden").value = value;
}