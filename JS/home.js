// deposit
document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        event.preventDefault();

        // get money
        const addMoney = document.getElementById('add-money').value;
        
        // pin number validation
        const pinNumber = document.getElementById('pin-number').value;

        // Verify pin number in fokinni way
        if(pinNumber === '1234'){
            console.log('Successful to add money');
            // get the current balance
            const balance = document.getElementById('current-balance').innerText;

            // total balance
            const addMoneyNumber = parseFloat(addMoney);
            const balanceNumber = parseFloat(balance);
            const newBalance = addMoneyNumber + balanceNumber;
            document.getElementById('current-balance').innerText = newBalance;

        }else{
            alert('Failed to Deposit!')
        }
})