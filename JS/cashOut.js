document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = document.getElementById('cash-out-amount').value;
    const cashOutNumber = parseFloat(cashOut);
    const pinNumber = document.getElementById('cash-out-pin-number').value;

    if(pinNumber === '1234'){
        const balance = document.getElementById('current-balance').innerText;

        const balanceNumber = parseFloat(balance);

        const newBalance = balanceNumber - cashOutNumber;

        document.getElementById('current-balance').innerText = newBalance;


    }else{
        alert('Failed to withdraw!')
    }
})