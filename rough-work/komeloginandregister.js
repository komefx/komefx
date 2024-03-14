const loginus = document.querySelector('.loginus');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.registerlink');

registerLink.addEventlistener('click', ()=> {loginus.classList.add('active');
});

loginLink.addEventlistener('click', ()=> {loginus.classList.remove('active');
});