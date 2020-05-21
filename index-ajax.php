<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/main.css">
    <!-- JS -->
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js'></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.6/handlebars.min.js'></script>
    <script src="assets/js/main.js"></script>
    <title>php-ajax-dischi</title>
</head>
<body>
    
    <header>
        <div class="container">
            <a href="#">
                <img src="assets/img/spotify-logo.png" alt="Spotify Logo" class="logo">
            </a>
        </div>
    </header>
    <!-- MAIN CONTENT -->
    <main>
        <div class="container">
            <div class="cd-collection">
            </div>
        </div>
    </main>

    <!-- TEMPLATE HANDLEBARS -->
    <script id="cd-template" type="text/x-handlebars-template">
        <div class="cd">
            <img src="{{poster}}" alt="{{title}}" class="poster">
            <h3 class="title">{{title}}</h3>
            <span class="author">{{author}}</span>
            <span class="year">{{year}}</span>
        </div>
    </script>

</body>
</html>