// step-1: set event handler
document.getElementById('button-login')
    .addEventListener('click', function(event){
    // step-2: prevent default behavior (preloading browser)
    event.preventDefault();
    // step-3: get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    // fokinni way to validate
    if(phoneNumber === '1234' && pinNumber === '1234'){
        console.log('You are logged in');
        window.location.href = '/home.html';
    }else{
        alert('Wrong Input!')
    }
    
})