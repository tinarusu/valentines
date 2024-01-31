document.getElementById('noOption').addEventListener('click', function() {
    var noOption = document.getElementById('noOption');
    var newPositionX = Math.random() * (window.innerWidth - noOption.clientWidth);
    var newPositionY = Math.random() * (window.innerHeight - noOption.clientHeight);

    noOption.style.left = newPositionX + 'px';
    noOption.style.top = newPositionY + 'px';
});