// si s'utilitza Bootstrap, vigilar amb el CDN de JQuery

$(document).ready(function () {
    $('#btnJoke').click(function (e) {
        e.preventDefault();
        $.get("http://api.icndb.com/jokes/random", function (chiste) {
            $("#joke").html(chiste.value.joke);
        });
    });
});

window.setInterval(function () {
    let randomColor = '#' + ('000000' + Math.floor(Math.random() * 16777215).toString(16)).slice(-6);
    $('.chuck').css({
        'color': randomColor,
    });
}, 250);