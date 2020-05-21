$(document).ready(function () {
    // Ref
    var cdCollection = $('.cd-collection');
    var searchArtist = $('.search-artist');
    // Init Handlebars
    var source = $('#cd-template').html();
    var template = Handlebars.compile(source);
    // Settings chiamata Ajax
    var settings = {
        url: "http://localhost:3000/php-ajax-dischi/json-script.php",
        method: 'GET'
    };
    // Chiamata Ajax CD
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
        console.log('Errore chiamata cd', error.status);
    });
    // Ricerca per Artista
    selectArtist(searchArtist, settings, template, cdCollection);
});
/************
 * FUNZIONI *
 ************/
// Funzione: Ricerca per Artista
function selectArtist(searchArtist, settings, template, cdCollection) {
    searchArtist.keyup(function () {
        $('.cd').remove();
        var nameArtist = searchArtist.val().trim().toLowerCase();
        // Chiamata Ajax per ricerca artisti
        $.ajax(settings)
        .done( function (res) {
            for (var i = 0; i < res.length; i++) {
                var cd = res[i];
                var artist = cd.author;
                if (nameArtist === '') {
                    var html = template(cd);
                    cdCollection.append(html);
                }
                else if (artist.toLowerCase() === nameArtist) {
                //else if (artist.toLowerCase().includes(nameArtist)) {
                    var html = template(cd);
                    cdCollection.append(html);
                }      
            }
        })
        .fail(function (error) {
            console.log('Errore chiamata artisti', error.status);
        });
    });    
}