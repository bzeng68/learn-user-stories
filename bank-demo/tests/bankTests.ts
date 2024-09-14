import Bank from '../src/bank';

// #1 Account Creation
console.log('\nAccount Creation Tests');
// Scenario 1: Successful Bank Account Creation
const accCreationBank = new Bank();
const accCreationAcc = accCreationBank.createAccount('Jane Doe', 25, '123456');
if (accCreationAcc.accountNumber === '123456') {
    console.log('Scenario 1: Successful Bank Account Creation passed');
} else {
    console.log('Scenario 1: Successful Bank Account Creation failed');
}

// Scenario 2: Failed Bank Account Creation
try {
    accCreationBank.createAccount('Jane Doe', 25, '123456');
    console.log('Scenario 2: Failed Bank Account Creation failed');
} catch (e) {
    console.log('Scenario 2: Failed Bank Account Creation passed');
}

// #2 Deposit Money
console.log('\nDeposit Money Tests');
// Scenario 1: Successful Deposit into Existing Account
const depositMoneyBank = new Bank();
const depositMoneyAcc = depositMoneyBank.createAccount('Jane Doe', 25, '123456');
depositMoneyBank.depositMoney(100, '123456');
if (depositMoneyAcc.balance === 100) {
    console.log('Scenario 1: Successful Deposit into Existing Account passed');
} else {
    console.log('Scenario 1: Successful Deposit into Existing Account failed');
}

// Scenario 2: Failed Deposit into Non-Existing Account
try {
    depositMoneyBank.depositMoney(100, '234567');
    console.log('Scenario 2: Failed Deposit into Non-Existing Account failed');
} catch (e) {
    console.log('Scenario 2: Failed Deposit into Non-Existing Account passed');
}

// Scenario 3: Failed Deposit into an Existing Account with Invalid Deposit Amount
try {
    depositMoneyBank.depositMoney(-50, '234567');
    console.log('Scenario 2: Failed Deposit into Non-Existing Account failed');
} catch (e) {
    console.log('Scenario 2: Failed Deposit into Non-Existing Account passed');
}

// #3 Withdraw Money
console.log('\nWithdraw Money Tests');
// Scenario 1: Successful Withdrawal from an Existing Account with Sufficient Balance
const withdrawMoneyBank = new Bank();
const withdrawMoneyAcc = withdrawMoneyBank.createAccount('Jane Doe', 25, '123456');
withdrawMoneyBank.depositMoney(100, '123456');
withdrawMoneyBank.withdrawMoney(75, '123456');
if (withdrawMoneyAcc.balance === 25) {
    console.log('Scenario 1: Successful Deposit into Existing Account passed');
} else {
    console.log('Scenario 1: Successful Deposit into Existing Account failed');
}

// Scenario 2: Failed Withdrawal from an Existing Account with Insufficient Balance
try {
    withdrawMoneyBank.withdrawMoney(50, '123456');
    console.log('Scenario 2: Failed Withdrawal from an Existing Account with Insufficient Balance failed');
} catch (e) {
    console.log('Scenario 2: Failed Withdrawal from an Existing Account with Insufficient Balance passed');
}

// Scenario 3: Failed Withdrawal from a Non-Existant Account
try {
    withdrawMoneyBank.withdrawMoney(50, '234567');
    console.log('Scenario 3: Failed Withdrawal from a Non-Existant Account failed');
} catch (e) {
    console.log('Scenario 3: Failed Withdrawal from a Non-Existant Account passed');
}

// Scenario 4: Failed Withdrawal from an Existing Account with Invalid Withdrawal Amount
try {
    withdrawMoneyBank.withdrawMoney(-50, '123456');
    console.log('Scenario 4: Failed Withdrawal from an Existing Account with Invalid Withdrawal Amount failed');
} catch (e) {
    console.log('Scenario 4: Failed Withdrawal from an Existing Account with Invalid Withdrawal Amount passed');
}

// #4 Check Balance
console.log('\nCheck Balance Tests');
// Scenario 1: Successful Balance Check of an Existing Account
const checkBalanceBank = new Bank();
const checkBalanceAcc = checkBalanceBank.createAccount('Jane Doe', 25, '123456');
checkBalanceBank.depositMoney(100, '123456');
const balance = checkBalanceBank.checkBalance('123456');
if (balance === 100) {
    console.log('Scenario 1: Successful Balance Check of an Existing Account passed');
} else {
    console.log('Scenario 1: Successful Balance Check of an Existing Account failed');
}

// Scenario 2: Failed Balance Check of a Non-Existant Account
try {
    checkBalanceBank.checkBalance('234567');
    console.log('Scenario 2: Failed Balance Check of a Non-Existant Account failed');
} catch (e) {
    console.log('Scenario 2: Failed Balance Check of a Non-Existant Account passed');
}