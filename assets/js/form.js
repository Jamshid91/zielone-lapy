// form login
const log_email = document.getElementById('log-email'),
      log_pass = document.getElementById('log-pass'),
      log_submit = document.querySelector('.log-submit');

log_submit.addEventListener('click', () => {
  checkInputsLogin();
  let success_log_email = log_email.nextElementSibling.classList,
      success_log_pass = log_pass.nextElementSibling.classList;

      if(success_log_email == 'success' && success_log_pass == 'success') {
        log_submit.type = 'submit'
      }
})



function checkInputsLogin() {
    let log_email_value = log_email.value.trim(),
        log_pass_value = log_pass.value.trim();

    if(log_pass_value === '') {
        setErrorFor(log_pass, '1px solid #E47169')
        } else {
        setSuccesFor(log_pass)
        log_pass.nextElementSibling.classList.add('success');
    }
    if(log_email_value === '') {
        setErrorFor(log_email, '1px solid #E47169')
    }
    else if(!isEmail(log_email_value)) {
        setErrorFor(log_email, '1px solid #E47169')
    }
    else {
        setSuccesFor(log_email)
        log_email.nextElementSibling.classList.add('success');
    }
}


// form regis
const regis_email = document.getElementById('regis-email'),
      regis_pass = document.getElementById('regis-pass'),
      regis_name = document.getElementById('regis-name'),
      regis_lastName = document.getElementById('regis-lastName'),
      regis_submit = document.querySelector('.regis-submit');

regis_submit.addEventListener('click', () => {
  checkInputsRegis();
  let success_regis_email = regis_email.nextElementSibling.classList,
      success_regis_pass = regis_pass.nextElementSibling.classList,
      success_regis_name = regis_name.nextElementSibling.classList,
      success_regis_lastName = regis_lastName.nextElementSibling.classList;

      if(success_regis_email == 'success' && success_regis_pass == 'success' && success_regis_name == 'success' && success_regis_lastName == 'success') {
        regis_submit.type = 'submit'
      }
})



function checkInputsRegis() {
    let regis_email_value = regis_email.value.trim(),
        regis_pass_value = regis_pass.value.trim(),
        regis_name_value = regis_name.value.trim(),
        regis_lastName_value = regis_lastName.value.trim();

    if(regis_name_value === '') {
        setErrorFor(regis_name, '1px solid #E47169')
        } else {
        setSuccesFor(regis_name)
        regis_name.nextElementSibling.classList.add('success');
    }
    if(regis_lastName_value === '') {
        setErrorFor(regis_lastName, '1px solid #E47169')
        } else {
        setSuccesFor(regis_lastName)
        regis_lastName.nextElementSibling.classList.add('success');
    }
    if(regis_pass_value === '') {
        setErrorFor(regis_pass, '1px solid #E47169')
        } else {
        setSuccesFor(regis_pass)
        regis_pass.nextElementSibling.classList.add('success');
    }
    if(regis_email_value === '') {
        setErrorFor(regis_email, '1px solid #E47169')
    }
    else if(!isEmail(regis_email_value)) {
        setErrorFor(regis_email, '1px solid #E47169')
    }
    else {
        setSuccesFor(regis_email)
        regis_email.nextElementSibling.classList.add('success');
    }
}


// validate
function setErrorFor(input, border) {
    input.style.border = border
}
    
function setSuccesFor(input) {
    input.style.border = `1px solid #2C9A33`;
} 
    
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}  


// show password
const show_pass = document.querySelectorAll('.show-pass');

show_pass.forEach(btn => {
    let x = btn.parentElement.children[0]
    btn.addEventListener('click', () => {
        if (x.type === "password") {
            x.type = "text";
            btn.classList.add('hide-pass')
          } else {
            x.type = "password";
            btn.classList.remove('hide-pass')
          }
    })
})



const popUp = document.querySelector('.popUp');
const regis_btn = document.querySelectorAll('.regis-btn');
const goTo_regis = document.querySelector('.goTo-regis');
const goTo_login = document.querySelector('.goTo-login');


goTo_regis.addEventListener('click', () => {
    goTo_regis.parentElement.parentElement.classList.add('d-none');
    goTo_regis.parentElement.parentElement.nextElementSibling.classList.remove('d-none');
});

goTo_login.addEventListener('click', () => {
    goTo_login.parentElement.parentElement.classList.add('d-none');
    goTo_login.parentElement.parentElement.previousElementSibling.classList.remove('d-none');
});

regis_btn.forEach(btn => {
    btn.addEventListener('click', () => {
        popUp.classList.remove('d-none');
        body.classList.add('bodyStopScroll')
    })
});

window.addEventListener('click', (e) => {
    if(e.target == popUp) {
        popUp.children[0].classList.add('popUpHide');
        
        setTimeout(() => {
          popUp.classList.add('d-none');
          body.classList.remove('bodyStopScroll')
          popUp.children[0].classList.remove('popUpHide');
          location.reload();
        }, 450);
    }
});