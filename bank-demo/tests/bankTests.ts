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
if (depositMoneyAcc.balance == 100) {
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