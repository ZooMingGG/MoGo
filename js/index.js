'use strict'
function showNav() {
    let toggle = document.getElementById('toggle');
    toggle.classList.toggle('toggle-active');
    let nav = document.getElementById('nav');
    nav.classList.toggle('nav-active');
}

function showAcordeonContent() {
    let firstAcordeon = document.getElementById('acordeon-1'),
    secondAcordeon = document.getElementById('acordeon-2');
    firstAcordeon.classList.toggle('active');
    secondAcordeon.classList.toggle('active');
}

function showSecondAcordeonContent() {
    let secondAcordeon = document.getElementById('acordeon-2');
    secondAcordeon.classList.toggle('active');
}

function showThirdAcordeonContent() {
    let thirdAcordeon = document.getElementById('acordeon-3');
    thirdAcordeon.classList.toggle('active');
}

