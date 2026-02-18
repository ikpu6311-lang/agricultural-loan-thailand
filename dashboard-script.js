// Dashboard Script for Agricultural Loan

// Sample loan product data
const loanProducts = [
    { id: 1, name: "Standard Loan", interestRate: 3.5 },
    { id: 2, name: "Premium Loan", interestRate: 2.5 },
];

let selectedLoanProduct = loanProducts[0]; // Default to Standard Loan

// Function to update loan details
function updateLoanDetails(amount, term) {
    const monthlyPayment = calculateMonthlyPayment(amount, term, selectedLoanProduct.interestRate);
    updateSummary(amount, term, monthlyPayment);
}

// Function to calculate monthly payment
function calculateMonthlyPayment(principal, termYears, annualRate) {
    const monthlyRate = annualRate / 100 / 12;
    const numberOfPayments = termYears * 12;
    return (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
}

// Function to update summary display
function updateSummary(amount, term, monthlyPayment) {
    const summaryElement = document.getElementById('loan-summary');
    summaryElement.innerHTML = `Loan Amount: $${amount}, Term: ${term} years, Monthly Payment: $${monthlyPayment.toFixed(2)}`;
}

// Slider functionality (pseudo-code)
// Assuming you have input sliders for amount and term
const loanAmountSlider = document.getElementById('loan-amount-slider');
const termSlider = document.getElementById('term-slider');

loanAmountSlider.addEventListener('input', () => {
    updateLoanDetails(loanAmountSlider.value, termSlider.value);
});

termSlider.addEventListener('input', () => {
    updateLoanDetails(loanAmountSlider.value, termSlider.value);
});

// Initial setup
updateLoanDetails(loanAmountSlider.value, termSlider.value);
