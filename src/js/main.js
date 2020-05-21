$(document).ready(function () {
    // Ref
    var cdCollection = $('.cd-collection');
    // Init Handlebars
    var source = $('#cd-template').html();
    var template = Handlebars.compile(source);
    // Chiamata Ajax
    var settings = {
        url: "http://localhost:3000/php-ajax-dischi/json-script.php",
        method: 'GET'
    }
    $.ajax(settings)
    .done(function (res) {
        for (var i = 0; i < res.length; i++) {
            var item = res[i];
            var content = {
                poster: item.poster,
                author: item.author,
                year: item.year,
                title: item.title,
            };
            // Compile Template
            var html = template(content);
            cdCollection.append(html);
        }
    })
    .fail(function (error) {
        console.log('Errore chiamata', error.status);
    });
});