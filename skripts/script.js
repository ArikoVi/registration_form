function show_hide_password(target){
    var input = document.getElementById('password-input');
    if (input.getAttribute('type') == 'password') {
        target.classList.add('view');
        input.setAttribute('type', 'text');
    } else {
        target.classList.remove('view');
        input.setAttribute('type', 'password');
    }
    return false;
}

function show_hide_password2(target){
    var input2 = document.getElementById('password-input2');
    if (input2.getAttribute('type') == 'password') {
        target.classList.add('view');
        input2.setAttribute('type', 'text');
    } else {
        target.classList.remove('view');
        input2.setAttribute('type', 'password');
    }
    return false;
}