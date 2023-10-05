const signUpButton = document.getElementById('signUp');
const logInButton = document.getElementById('logIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

logInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        header.classList.toggle('active-header'); 
        menuToggle.classList.toggle('active-menu'); 

    });
});
