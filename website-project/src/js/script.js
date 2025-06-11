document.addEventListener('DOMContentLoaded', function() {
    const backButtons = document.querySelectorAll('.back-to-home');

    backButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.location.href = '../index.html';
        });
    });
});